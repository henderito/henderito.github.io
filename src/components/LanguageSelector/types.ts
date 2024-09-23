export interface ILanguageData {
  flagUrl: string;
  flagDescription: string;
  locale: string;
}

export interface ILanguageOption {
  flagUrl: string;
  flagDescription: string;
  locale: string;
}

// export interface ILanguageOption {
//   'es': ILanguageData;
//   'en': ILanguageData;
//   'fr': ILanguageData;
//   'pt': ILanguageData;
//   'it': ILanguageData;
// }

export interface ILanguageSelectorProps {
  flagDefault: ILanguageOption;
  options: ILanguageOption[];
  // lang: string;
}