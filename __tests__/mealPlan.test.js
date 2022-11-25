import createMealPlan, { createMeal } from '../src/mealPlan'

const emptyMeal = {
  main: '',
  carbs: null,
  options: null,
  extras: null
}

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})

describe('createMealPlan', () => {
  test('Returns a meal for every day', () => {
    const mealPlan = createMealPlan()
    expect(mealPlan).toHaveProperty('monday')
    expect(mealPlan).toHaveProperty('tuesday')
    expect(mealPlan).toHaveProperty('wednesday')
    expect(mealPlan).toHaveProperty('thursday')
    expect(mealPlan).toHaveProperty('friday')
    expect(mealPlan).toHaveProperty('saturday')
    expect(mealPlan).toHaveProperty('sunday')
  })
})

describe('createMeal', () => {
  test('Returns a meal', () => {
    const meal = createMeal(emptyMeal)
    expect(meal).toHaveProperty('main')
    expect(meal).toHaveProperty('carbs')
    expect(meal).toHaveProperty('options')
    expect(meal).toHaveProperty('extras')
  })

  test('Given a menuItem with carbs, returns a meal with one carbs', () => {
    const menuItem = {
      main: 'Pasta Main',
      carbs: ['pasta'],
      options: null,
      extras: null
    }

    const meal = createMeal(menuItem)

    expect(meal.main).toBe('Pasta Main')
    expect(meal.carbs).toBe('pasta')
  })

  test('Given a menuItem with options, returns a meal with one option', () => {
    const menuItem = {
      main: 'Chickpea Main',
      carbs: null,
      options: ['chickpea'],
      extras: null
    }

    const meal = createMeal(menuItem)

    expect(meal.main).toBe('Chickpea Main')
    expect(meal.options).toBe('chickpea')
  })

  test('Given multiple carbs, returns one', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8)
    const menuItem = {
      main: 'Carb Main',
      carbs: ['pasta', 'rice'],
      options: null,
      extras: null
    }

    const meal = createMeal(menuItem)

    expect(meal.main).toBe('Carb Main')
    expect(meal.carbs).toBe('rice')
  })

  test('Given multiple options, returns one', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8)

    const menuItem = {
      main: 'Options Main',
      carbs: null,
      options: ['chickpea', 'tofu', 'potato'],
      extras: null
    }

    const meal = createMeal(menuItem)

    expect(meal.main).toBe('Options Main')
    expect(meal.options).toBe('potato')
  })

  test('Given extras, can pick one', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.3)
    
    const menuItem = {
      main: 'One Option Meal',
      carbs: null,
      options: null,
      extras: ['sausage', 'bacon', 'eggs']
    }

    const oneOptionMeal = createMeal(menuItem)

    expect(oneOptionMeal.main).toBe('One Option Meal')
    expect(oneOptionMeal.extras.length).toBe(1)
  })

  test('Given extras, can pick two', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.6)
    
    const menuItem = {
      main: 'One Option Meal',
      carbs: null,
      options: null,
      extras: ['sausage', 'bacon', 'eggs']
    }

    const oneOptionMeal = createMeal(menuItem)

    expect(oneOptionMeal.main).toBe('One Option Meal')
    expect(oneOptionMeal.extras.length).toBe(2)
  })

  test('Given extras, can pick three', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.8)
    
    const menuItem = {
      main: 'One Option Meal',
      carbs: null,
      options: null,
      extras: ['sausage', 'bacon', 'eggs']
    }

    const oneOptionMeal = createMeal(menuItem)

    expect(oneOptionMeal.main).toBe('One Option Meal')
    expect(oneOptionMeal.extras.length).toBe(3)
  })

  test('Given extras, can pick none', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.1)
    
    const menuItem = {
      main: 'One Option Meal',
      carbs: null,
      options: null,
      extras: ['sausage', 'bacon', 'eggs']
    }

    const oneOptionMeal = createMeal(menuItem)

    expect(oneOptionMeal.main).toBe('One Option Meal')
    expect(oneOptionMeal.extras.length).toBe(0)
  })
})