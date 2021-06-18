import { Component, OnInit } from '@angular/core';
import { VideosModel } from 'src/app/model/Youtube/videos.model';
import { YoutubeModel } from 'src/app/model/Youtube/youtube.model';

import {DomSanitizer} from '@angular/platform-browser';

import { YoutubeService } from 'src/app/youtube.service';
import { ItemsYoutubeModel } from 'src/app/model/Youtube/itemsYoutube.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
})
export class VideosComponent implements OnInit {
  videosModel: VideosModel[] = [];
  youtubeModel: YoutubeModel;

  myUrl;

  constructor(private youTubeService: YoutubeService, private sanitizer: DomSanitizer) {
    this.myUrl = sanitizer.bypassSecurityTrustUrl(this.myUrl);
  }

  ngOnInit(): void {
    this.videosModel = this.youTubeService.getUrlVideos();

    this.getVideos();
  }

 

  getVideos() {
    this.videosModel.forEach((item) => {
      this.youTubeService.getVideosForChanel(item.urlVideo).subscribe(
        (data) => {
          //  = data;
          item.youTubeModel = data;
          console.log('data do get videos', item.youTubeModel);
        },
        (err) => {
          console.log('Erro ao buscar videos', err);
        }
      );
    });
  }
}
