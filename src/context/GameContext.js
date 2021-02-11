import createDataContext from './createDataContext'
import randomColor from '../helper/randomColor'

const colors = ['#3e517a', '#fe5f55', '#00a7e1', '#e9724c']

const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      const { players, totalTime, finalTime } = action.payload
      const arr = []
      for (let i = 0; i < players; i++) {
        arr.push({
          color: randomColor(),
          time: totalTime,
        })
      }
      return {
        players: arr,
        finalTime,
      }
    default:
      return state
  }
}

const createGame = dispatch => (players, totalTime, finalTime) => {
  dispatch({ type: 'create', payload: { players, totalTime, finalTime } })
}

export const { Context, Provider } = createDataContext(
  reducer,
  {
    createGame,
  },
  {
    players: [],
    finalTime: 0,
  },
)