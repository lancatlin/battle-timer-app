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
        })
      }
      return {
        ...state,
        current: 0,
        players: arr,
        finalTime,
      }

    case 'decrease':
      return {
        ...state,
        players: state.players.map(
          (player, i) => i == state.current
            ? { ...player, time: player.time - 1}
            : player
        ),
      }

    case 'next':
      return {
        ...state,
        current: (state.current + 1) % state.players.length,
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
}

const next = dispatch => () => {
  dispatch({ type: 'next'})
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
  },
)