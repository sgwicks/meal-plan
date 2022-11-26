import React, { useEffect, useState } from 'react'
import Meal from './components/Meal'

import createMealPlan from './mealPlan'

const App = () => {
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)

  useEffect(() => {
    const plan = createMealPlan()
    setMealPlan(plan)
  }, [])

  return (
    <main>
    <h1>Meal Plan</h1>
    { mealPlan
      ? (Object.keys(mealPlan) as day[]).map((key) => {
        return (<Meal meal={mealPlan[key as keyof typeof mealPlan]} day={key} />)
      })
      : (<h3>No meal plan</h3>)
    }
    </main>
  )
}

export default App