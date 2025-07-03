import Part from "./Part"

const Content = ({course}) => {
  const parts = course.parts
  const partsDisplay = parts.map(part =>
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  )
  const sum = parts.reduce((sum, part)=>sum+part.exercises,0)

  // these equals to 👆
  // function sumO(parts) {
  //   let summ = 0
  //   for (let i=0; i<parts.length; i++){
  //     summ = summ + parts[i].exercises
  //   }
  //   return summ
  // }
  // const sum = sumO(parts)

  return(
    <>
      {partsDisplay}
      {/* <Part name={name} exercises={exercises} />
      <Part name={name} exercises={exercises} />
      <Part name={name} exercises={exercises} /> */}
      <p><strong>total of {sum} exercises</strong></p>
    </>
  )
}

export default Content