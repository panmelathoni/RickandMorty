import { Component, OnInit } from '@angular/core';
import { VideosModel } from 'src/app/model/Youtube/videos.model';
import { YoutubeModel } from 'src/app/model/Youtube/youtube.model';

import {DomSanitizer} from '@angular/platform-browser';

import { YoutubeService } from 'src/app/youtube.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videosModel: VideosModel = new VideosModel();
  dataUrl;
 

  constructor(private youTubeService: YoutubeService, private sanitizer: DomSanitizer, private router: Router, ) {
   
  }

  getUrl(videoId: string){
    let url = 'https://www.youtube.com/embed/'+ videoId;
    console.log('url', url);
    
    return url
  }

  ngOnInit(): void {
    this.videosModel = this.youTubeService.getUrlVideos();


    this.getVideos();
    console.log('videos model', this.videosModel);
  }

  cleanBtn(){
    this.router.navigate(['searchCharacters']);

  }

  getVideos() {
    this.videosModel.youTubeModel.forEach((item, index) => {
      this.youTubeService.getVideosForChanel(item.urlVideo).subscribe(
        (data) => {
          this.videosModel.youTubeModel[index] = data;
          this.videosModel.youTubeModel[index].urlVideo = item.urlVideo; 
          console.log('index', index, 'model', this.videosModel[index]);
        },
        (err) => {
          console.log('Erro ao buscar videos', err);
        }
      );
    });
  }
}
