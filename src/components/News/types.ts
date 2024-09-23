import { INewsData } from "@/helpers/getNewsInfoById";
import { IRelatedNews } from "@/helpers/getRelatedPostInfoById";

export interface INewsContainerProps { 
    id: string, 
    data: INewsData, 
    related: IRelatedNews[], 
    imagesPath: string[], 
    isGrid?: boolean 
}