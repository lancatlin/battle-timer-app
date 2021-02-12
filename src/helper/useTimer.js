import { useReducer, useEffect, useContext, useState } from 'react'
import { Context } from '../context/GameContext'

export default () => {
  const { state, decreaseTime } = useContext(Context)
  const [ intervalId, setIntervalId] = useState(null)
  const [ p, setPlayer ] = useState(0)
  const player = state.players[p]

  const reducer = (finalTime, action) => {
    switch (action) {
      case 'reset':
        return state.finalTime
      case 'decrease':
        return finalTime - 1
      default:
        return finalTime
    }
  } 

  const next = () => setPlayer((p + 1) % state.players.length) 
  const stop = () => clearInterval(intervalId)

  const [ finalTime, dispatch ] = useReducer(reducer, state.finalTime)

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId)
      dispatch('reset')
    }
    setIntervalId(setInterval(() => {
      if (player.time > 0)  {
        decreaseTime(p)
      } else {
        dispatch('decrease')
      }
    }, 1000))
  }, [p, player.time > 0])
  return [ player, finalTime, next, stop ]
}