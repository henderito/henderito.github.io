export interface IHeaderItems {
    itemId: string;
    path: string;
    labelKey: string;
}

export const headerItems: IHeaderItems[] = [
  {
    itemId: "header-item-news",
    labelKey: "News",
    path: "/novedades",
  },
  {
    itemId: "header-item-shop",
    labelKey: "BuyASculpture",
    path: "/unicornios",
  }
];
