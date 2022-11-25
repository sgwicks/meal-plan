enum Carbs {
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

type carbs = keyof typeof Carbs

interface MenuItem {
  main: string,
  options: string[],
  carbs: carbs[],
  extras: string[]
}

type Menu = MenuItem[]

interface Meal {
  main: string,
  options: string | null,
  carbs: carbs | null,
  extras: string[] | null
}

interface MealPlan {
  monday: Meal,
  tuesday: Meal,
  wednesday: Meal,
  thursday: Meal,
  friday: Meal,
  saturday: Meal,
  sunday: Meal
}