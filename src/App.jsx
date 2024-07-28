import { useState } from 'react'
import './App.css'

const MostVotes = ({anecdotesarr,likearr}) => {

  const findquote = (anecs,arr) => {

    if (Math.max(...arr) == 0) {
      return "Start Liking Anecdotes..."
    }

    let index = arr.indexOf(Math.max(...arr))
    
    return anecs[index]
  }

  return (
    <>
      <h3>Anecdote with most votes</h3>
      <p>{findquote(anecdotesarr,likearr)}</p>
    </>
  )
}

const App = () => {
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

  const [selected, setSelected] = useState(0)
  const [likes,setLikes] = useState(new Array(anecdotes.length).fill(0))

  const handlenext = () => {
    if (selected < anecdotes.length - 1) {
      setSelected(selected+1)
    }
  }

  const handleprev = () => {
    if (0 < selected) {
      setSelected(selected - 1)
    }
  }

  const likewrap = (index) => () => {handlelike(index)}

  const handlelike = (index) => {
    let arr = [...likes]
    arr[index] += 1
    setLikes(arr)
  }

  return (
    <>
      <h3>Annecdote of the day</h3>
      <div className='annectode'>
        {anecdotes[selected]}
      </div>

      <h5>❤️{likes[selected]}</h5>

      <div className='btnCntr'>
        <button onClick={handleprev}>
          prev
        </button>

        <button onClick={likewrap(selected)}>
          like
        </button>

        <button onClick={handlenext}>
          next annectode
        </button>
      </div>



      <div className='mostVotes'>
        <MostVotes anecdotesarr={anecdotes} likearr={likes} />
      </div>
    </>
  )
}

export default App
