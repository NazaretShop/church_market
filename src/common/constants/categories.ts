import { TDeviceType } from "../types";

export const CATEGORIES: Record<string, string> = {
  analogues: "Аналои",
  liturgical_books: "Богослужебные книги",
  church_sconces: "Бра церковные",
  wreaths: "Венцы",
  calvary: "Голгофы",
  tombs_and_crayfish: "Гробницы и раки",
  gift_bearers: "Дароносицы",
  guardians: "Дарохранительницы",
  temple_doors: "Двери храмовые",
  dikyrias_trikyrias: "Дикирии, трикирии",
  eucharistic_sets: "Евхаристические наборы",
  sacrifices: "Жертвенники",
  granite_and_marble_products: "Изделия из гранита и мрамора",
};

export const PAGE_LIMIT: Record<TDeviceType, number> = {
  desktop: 30,
  littleDesktop: 24,
  tablet: 18,
  mobile: 14,
  littleMobile: 8,
};
