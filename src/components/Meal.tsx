import React, { FunctionComponent } from 'react'

const Meal: FunctionComponent<{ meal: Meal | undefined, day: day }> = ({ meal, day }) => {
  if (meal) {
    const createMealTitle = (): string => {
      let title = meal.main
      if (meal.options) {
        title = meal.options + ' ' + title
      }
      if (meal.carbs) {
        title += ` with ${meal.carbs}`
      }
      return title
    }
    return (
      <article>
        <h2>{day}: {createMealTitle()}</h2>
        { meal.extras?.length
          ? (<p>Extras: <ul>
             {meal.extras.map(extra => (
                <li>{extra}</li>
              ))}
            </ul>
          </p>)
          : null
        }
      </article>
    )
  } else {
    return (
      <h2>No Meal for Today</h2>
    )
  }
}

export default Meal