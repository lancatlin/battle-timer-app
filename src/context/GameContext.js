import createDataContext from './createDataContext'
import randomColor from '../helper/randomColor'

const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      const { players, totalTime, finalTime } = action.payload
      const arr = []
      for (let i = 0; i < players; i++) {
        arr.push({
          name: `Player ${i+1}`,
          color: randomColor(),
          time: totalTime,
          lose: false,
        })
      }
      return {
        ...state,
        current: 0,
        players: arr,
        finalTime,
        timer: finalTime,
      }

    case 'decrease':
      if (state.players[state.current].time > 0) {
        return {
          ...state,
          players: state.players.map(
            (player, i) => i == state.current
              ? { ...player, time: player.time - 1 }
              : player
          ),
        }
      } else {
        return {
          ...state,
          timer: state.timer - 1,
        }
      }

    case 'next':
      return {
        ...state,
        current: (state.current + 1) % state.players.length,
        timer: state.finalTime,
      }

    case 'check':
      return {
        ...state,
        players: state.players.map(
          (player, i) => ({
            ...player,
            lose: player.time <= 0 && i == state.current && state.timer <= 0,
          })
        )
      }

    default:
      return state
  }
}

const createGame = dispatch => (players, totalTime, finalTime) => {
  dispatch({ type: 'create', payload: { players, totalTime, finalTime } })
}

const decreaseTime = dispatch => () => {
  dispatch({ type: 'decrease' })
  dispatch({ type: 'check' })
}

const next = dispatch => () => {
  dispatch({ type: 'next' })
}

export const { Context, Provider } = createDataContext(
  reducer,
  {
    createGame,
    decreaseTime,
    next,
  },
  {
    players: [],
    finalTime: 0,
    current: 0,
    timer: 0,
  },
)