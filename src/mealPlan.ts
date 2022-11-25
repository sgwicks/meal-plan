import menu from './menu'

const randomise = (range: number): number => {
  return Math.floor(Math.random() * range)
}

const chooseExtras = (extras: string[], choices: number, chosen: string[] = []): string[] => {
  if (!choices) return chosen

  const chosenExtras = [ ...chosen ]
  const choice = randomise(choices)
  chosenExtras.push(extras[choice])
  const remainingExtras = extras.slice(choice, choice + 1)

  return chooseExtras(remainingExtras, --choices, chosenExtras)
}

const emptyMeal: Meal = {
  main: '',
  carbs: null,
  options: null,
  extras: null
}

const mealPlan = {
  monday: emptyMeal,
  tuesday: emptyMeal,
  wednesday: emptyMeal,
  thursday: emptyMeal,
  friday: emptyMeal,
  saturday: emptyMeal,
  sunday: emptyMeal
}

export const createMeal = (menuItem: MenuItem): Meal => {
  // Create a base meal to return
  const meal = { ...emptyMeal }

  // Set the name of the meal
  meal.main = menuItem.main

  // If we have options for carbs, pick one
  if (menuItem.carbs) {
    const randomCarb = randomise(menuItem.carbs.length)
    meal.carbs = menuItem.carbs[randomCarb]
  }

  // If we have options for recipe, pick one
  if (menuItem.options) {
    const randomOption = randomise(menuItem.options.length)
    meal.options = menuItem.options[randomOption]
  }

  // If we have extras, pick any number
  if (menuItem.extras) {
    const numExtras = randomise(menuItem.extras.length + 1)
    const chosenExtras = chooseExtras(menuItem.extras, numExtras)
    meal.extras = chosenExtras
  }

  return meal
}

const createMealPlan = (): MealPlan => {
  return mealPlan
}

export default createMealPlan