import { useState } from 'react'

const DisplayUp = ({anecdotes, votes, index}) => {
  return(
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} vote</p>
    </div>
  )
}

function getMaxStack(votes){
  let votesL = Object.values(votes)
  let stack =0
  let former = votesL[stack]
  let later = votesL[stack+1]
  for (let i = 0; i < 6; i++){
    console.log(`compairing index${stack} and index${stack+1}`);
    if(former>=later){
      console.log(former,'is greater than or even',later); 
      later = votesL[i+2]
      // console.log('stack',stack);
    }
    else{
      console.log(former,'is less than',later);
      former = later
      later = votesL[i+2]
      stack = i+1
      console.log('stack',stack);
    }
  if(votesL[stack]<votesL[7]){
    console.log('i6','is less than','i7')
    stack = 7
    console.log('stack',stack)
  }
  }
  return stack
}

const DisplayBottom = ({anecdotes, votes}) => {
  const stack = getMaxStack(votes)
  
  return(
    <div>
      {/* <p>anecdote {stack+1}:</p> */}
      <p><strong>{anecdotes[stack]}</strong></p>
      <p>has {votes[stack]} votes</p>
      {/* <p>total votes: {Object.values(votes).join(' ')}</p> */}
    </div>
  )
}

const Btn = ({onClick, text}) => <button onClick={onClick}>{text}</button>

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
    7:0,
    // 0:0,
    // 1:1,
    // 2:2,
    // 3:3,
    // 4:4,
    // 5:5,
    // 6:6,
    // 7:7,
  })

  const [index,setIndex] = useState(0)

  const handleVote = () => {
    const newVotes = {
      ...votes,
      [index]: votes[index] + 1 //javascript recognize the former index as string by default even if i didnt put it in "", to use the value of index, put it in []
    }
    // console.log(newVotes);
    setVotes(newVotes)
  }

  const handleNext = () => {
    const randomInt = Math.floor(Math.random()*anecdotes.length)
    if (randomInt !== index) {
      setIndex(randomInt)
    }
    else{
      setIndex(randomInt+1) //for convenience, adding 1 to simulate random. Otherwise a while loop should be used here
    }
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <DisplayUp anecdotes={anecdotes} votes={votes} index={index}/>
      <Btn onClick={handleVote} text={'vote'} />
      <Btn onClick={handleNext} text={'next anecdote'} />
      <h1>Anecdote with most votes</h1>
      <DisplayBottom anecdotes={anecdotes} votes={votes}/>
    </>
  )
}

export default App
