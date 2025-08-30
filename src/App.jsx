import { useState } from 'react'

const Header = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>

    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Stat = ({ text, value }) => {
  return (
    <>
      <p>{text} {value}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Stat text='good' value={good} />
      <Stat text='neutral' value={neutral} />
      <Stat text='bad' value={bad} />
      <Stat text='all' value={(good + neutral + bad) / 3} />
      <Stat text='average' value={(good - bad) / (good + neutral + bad)} />
      <Stat text='positive' value={'' +good / (good + neutral + bad) * 100 + ' %'} />



    </div>
  )
}

export default App