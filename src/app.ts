import express from 'express'
import createMealPlan from "./mealPlan";

const app = express()

app.get('/', (req, res) => {
  const mealPlan = createMealPlan()

  res.send(JSON.stringify(mealPlan))
})

app.listen(6060)