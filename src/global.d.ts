declare enum Carbs {
  rice,
  pasta,
  chips,
  naan,
  bread,
  nachos,
  spaghetti,
  bhaji,
  "bulgur wheat",
  "cous cous",
  pitta
}

declare type carbs = keyof typeof Carbs

declare type day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday"

declare interface MenuItem {
  main: string,
  options: string[],
  carbs: carbs[],
  extras: string[]
}

declare type Menu = MenuItem[]

declare interface Meal {
  main: string,
  options: string | null,
  carbs: carbs | null,
  extras: string[] | null
}

declare interface MealPlan {
  [k: day]: Meal
}