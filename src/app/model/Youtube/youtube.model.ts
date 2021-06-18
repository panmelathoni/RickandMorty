import { ItemsYoutubeModel } from './itemsYoutube.model';

import { PageInfoModel } from './pageInfo.model';

export class YoutubeModel {
  kind: string;
  etag: string;
  items: ItemsYoutubeModel[] = [];
  pageInfo: PageInfoModel;

  constructor() {}
}
