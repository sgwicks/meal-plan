import menu from './menu'

const randomise = (range: number): number => {
  return Math.floor(Math.random() * range)
}

const chooseExtras = <T>(extras: T[], choices: number, chosen: T[] = []): T[] => {
  if (!choices) return chosen
  if (choices === extras.length) return extras

  const chosenExtras = [ ...chosen ]
  const choice = randomise(choices)
  chosenExtras.push(extras[choice])
  const remainingExtras = extras.filter((item, i) => i !== choice)

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
  const chosenItems = chooseExtras<MenuItem>(menu, 7)
  mealPlan.monday = createMeal(chosenItems[0])
  mealPlan.tuesday = createMeal(chosenItems[1])
  mealPlan.wednesday = createMeal(chosenItems[2])
  mealPlan.thursday = createMeal(chosenItems[3])
  mealPlan.friday = createMeal(chosenItems[4])
  mealPlan.saturday = createMeal(chosenItems[5])
  mealPlan.sunday = createMeal(chosenItems[6])
  
  return mealPlan
}

export default createMealPlan