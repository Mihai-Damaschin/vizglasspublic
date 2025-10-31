import "server-only";
import { TLocales } from "@/lib/constants";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  ro: () =>
    import("../../dictionaries/ro.json").then((module) => module.default),
  it: () =>
    import("../../dictionaries/it.json").then((module) => module.default),
  ru: () =>
    import("../../dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: TLocales) => dictionaries[locale]();
