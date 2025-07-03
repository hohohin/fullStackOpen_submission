function Header(props) {
  return(
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  return(
    <p>{props.name} {props.exercises}</p>
  )
}

function Content(props) {
  return(
    <>
      <Part name={props.part1} exercises={props.exercises1} />

    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App