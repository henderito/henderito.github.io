import { INews, news } from "@/global/newsData";

export interface INewsData {
    author: string;
    date: string;
    title: string;
    text: string;
    relatedIds: string[];
    images: string;
}

export const getNewsInfoById = (id: string): INewsData => {
    const data = news[id as keyof INews];

    console.log(data)

    return {
        author: data.author,
        date: data.date,
        text: data.text,
        title: data.title,
        images: data.images,
        relatedIds: data.relatedIds
    }
}