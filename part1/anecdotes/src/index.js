import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttons = (props) => {
  return (
    <div>
      <button onClick={props.vote}>vote</button>
      <button onClick={props.next}>next anecdote</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const points = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(points)

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const mostVotes = () => {
    let max = 0
    let index = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i]
        index = i
      }
    }
    return index
  }

  return (
    <div>
      {props.anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Buttons vote={vote} next={() => setSelected(Math.floor(Math.random() * anecdotes.length))} />
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[mostVotes()]}
      <br />
      has {votes[mostVotes()]} votes
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)