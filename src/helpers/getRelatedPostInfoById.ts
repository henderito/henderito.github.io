import { getNewsInfoById } from "./getNewsInfoById";

export interface IRelatedNews {
    id: string;
    title: string;
    image: string;
}

export const getRelatedPostInfoById = (ids: string[]): IRelatedNews[] => {
    const relatedPosts = ids.map((id) => {
        const data = getNewsInfoById(id);

        console.log(data)

        return {
            id,
            title: data.title,
            image: data.images[0]
        }
    })

    return relatedPosts;
}