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
  monday: Meal,
  tuesday: Meal,
  wednesday: Meal,
  thursday: Meal,
  friday: Meal,
  saturday: Meal,
  sunday: Meal
}