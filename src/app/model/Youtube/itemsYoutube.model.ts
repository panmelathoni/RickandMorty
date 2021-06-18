import { ContentDetailsModel } from './contentDetails.model';
import { SnippetYoutubeModel } from './snippetYoutube.model';
import { StatisticsModel } from './statistics.model';
import { StatusModel } from './status.model';

export class ItemsYoutubeModel{

   kind: string;
   etag: string;
   id: string;
   snippet: SnippetYoutubeModel;
   contentDetaisl: any;
   status: any;
   statistics: any;
   
    
}