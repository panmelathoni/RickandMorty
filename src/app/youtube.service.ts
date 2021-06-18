import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosModel } from './model/Youtube/videos.model';
import { YoutubeModel } from './model/Youtube/youtube.model';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  apiKey: string = 'AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc';
  urlVideos: string[] = [
    'https://www.googleapis.com/youtube/v3/videos?id=_uUcMwsR5hg&key=AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc&part=snippet,contentDetails,statistics,status',
    'https://www.googleapis.com/youtube/v3/videos?id=_IZfO_LfK5Q&key=AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc&part=snippet,contentDetails,statistics,status',
    'https://www.googleapis.com/youtube/v3/videos?id=vnIG6LzMnk0&key=AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc&part=snippet,contentDetails,statistics,status',
    'https://www.googleapis.com/youtube/v3/videos?id=hl1U0bxTHbY&key=AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc&part=snippet,contentDetails,statistics,status',
    'https://www.googleapis.com/youtube/v3/videos?id=F6Zy_mLgSNQ&key=AIzaSyDLnC3BetON-P9FEf6EtYh5p6WyOgrc2zc&part=snippet,contentDetails,statistics,status',
  ];

  

  videosModel: VideosModel[] = [];

  constructor(public http: HttpClient, public sanitizer: DomSanitizer) {}

  getUrlVideos(): VideosModel {
    var retorno: VideosModel = new VideosModel();
    retorno.youTubeModel = [];
    for (var i = 0; i < 5; i++) {
      let item: YoutubeModel = new YoutubeModel();
      item.urlVideo = this.urlVideos[i];
      item.items = [];
      retorno.youTubeModel.push(item);
    }
    return retorno;
  }

  getVideosForChanel(url: string): Observable<YoutubeModel> {
    return this.http.get<YoutubeModel>(url);
  }

  // getTrustUrl(myUrl : string): Observable<any>{
  // return this.myUrl = this.sanitizer.bypassSecurityTrustUrl(myUrl);

  // }
}
