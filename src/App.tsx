import React, { useEffect, useState } from 'react'
import Meal from './components/Meal'

import createMealPlan from './mealPlan'

const App = () => {
  const [mealPlan, setMealPlan] = useState<MealPlan | null>(null)
  const [toggle, regenerateMealPlan] = useState(false)
  
  useEffect(() => {
    const plan = createMealPlan()
    setMealPlan(plan)
  }, [toggle])

  // If we don't do this, the first toggle does not result in a new meal plan
  useEffect(() => {
    regenerateMealPlan(!toggle)
  }, [])

  return (
    <main>
    <h1>Meal Plan</h1>
    <button onClick={() => regenerateMealPlan(!toggle)}>Create new plan</button>
    { mealPlan
      ? (Object.keys(mealPlan) as day[]).map((key) => {
        return (<Meal meal={mealPlan[key as keyof typeof mealPlan]} day={key} key={key} />)
      })
      : (<h3>No meal plan</h3>)
    }
    </main>
  )
}

export default App