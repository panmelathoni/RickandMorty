import { ThumbnailsDefaultModel } from './thumbnailsDefault.model';
import { ThumbnailsHighModel } from './ThumbnailsHigh.model';
import { ThumbnailsMaxresModel } from './thumbnailsMaxres.model';
import { ThumbnailsMediumModel } from './thumbnailsMedium.model';
import { ThumbnailsStandardModel } from './thumbnailsStandard.model';

export class ThumbnailsModel{

    
    default: ThumbnailsDefaultModel;
    medium: ThumbnailsMediumModel;
    high: ThumbnailsHighModel;
    standard: ThumbnailsStandardModel;
    maxres: ThumbnailsMaxresModel;
    
    constructor() {}
 }