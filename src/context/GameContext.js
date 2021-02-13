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
        players: arr,
        finalTime,
      }

    case 'decrease':
    default:
      return state
  }
}

const createGame = dispatch => (players, totalTime, finalTime) => {
  dispatch({ type: 'create', payload: { players, totalTime, finalTime } })
}

const decreaseTime = dispatch => playerId => {
  dispatch({ type: 'decrease', payload: playerId })
}

export const { Context, Provider } = createDataContext(
  reducer,
  {
    createGame,
    decreaseTime,
  },
  {
    players: [],
    finalTime: 0,
  },
)