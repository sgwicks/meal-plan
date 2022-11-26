import React, { FunctionComponent } from 'react'

const capitaliseWord = (string: string) => {
  const firstLetter = string[0]
  return firstLetter.toUpperCase() + string.slice(1)
}

const capitaliseSentence = (string: string) => {
  const words = string.split(' ')
  const capitalisedWords = words.map(word => capitaliseWord(word))
  return capitalisedWords.join(' ')
}

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
      return capitaliseSentence(title)
    }
    return (
      <article>
        <h2>{capitaliseWord(day)}</h2>
        <h3 style={{marginLeft: '16px'}}>{createMealTitle()}</h3>
        { meal.extras?.length
          ? (<div style={{marginLeft: '32px'}}>Extras: {meal.extras.join(', ')}
              {/* <ul>
              {meal.extras.map(extra => (
                  <li key={day + extra}>{capitaliseWord(extra)}</li>
                ))}
              </ul> */}
          </div>)
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