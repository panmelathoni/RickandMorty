import { ItemsYoutubeModel } from './itemsYoutube.model';

import { PageInfoModel } from './pageInfo.model';

export class YoutubeModel {
  urlVideo: string;
  kind: string;
  etag: string;
  items: ItemsYoutubeModel[] = [];
  pageInfo: PageInfoModel;

  constructor() {}
}
