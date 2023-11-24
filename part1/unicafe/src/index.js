import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <Statistic text="Good" value={props.good}/>
        <Statistic text="Neutral" value={props.neutral}/>
        <Statistic text="Bad" value={props.bad}/>
        <Statistic text="All" value={props.good + props.neutral + props.bad}/>
        <Statistic text="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
        <Statistic text="Positive" value={(props.good / (props.good + props.neutral + props.bad)) * 100 + " %"}/>
      </tbody>
    </table>
  )
}

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td> 
      <td>{props.value}</td>
    </tr>
  )
}

const Title = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text="Give Feedback"/>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <Title text="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)