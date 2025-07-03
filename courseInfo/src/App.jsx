import { useState } from 'react'

const Header = ({id, name}) => <h1 key={id}>{name}</h1>

const Content = ({course}) => {
  const courseID = course.id
  const courseName = course.name
  const parts = course.parts
  const partsDisplay = parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )
  const sum = parts.reduce((sum, part)=>sum+part.exercises,0)

  // //these equals to 👆
  // function sumO(parts) {
  //   let summ = 0
  //   for (let i=0; i<parts.length; i++){
  //     summ = summ + parts[i].exercises
  //   }
  //   return summ
  // }
  // // const sum = sumO(parts)

  return(
    <>
      <Header id={courseID} name={courseName} />
      {partsDisplay}
      {/* <Part name={name} exercises={exercises} />
      <Part name={name} exercises={exercises} />
      <Part name={name} exercises={exercises} /> */}
      <p><strong>total of {sum} exercises</strong></p>
    </>
  )
}

const Part = ({name, exercises}) => {
  return(
    <p>{name} {exercises}</p>
  )
}

const Course = () => {
  return(
    <>
      <Header />
      <Content />
    </>
  )
}

function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Content course={course} />
}

export default App
