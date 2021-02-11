import createDataContext from './createDataContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'create':
      const { players, totalTime, finalTime } = action.payload
      return {
        players: new Array(players).fill(totalTime),
        finalTime,
      }
    default:
      return state
  }
}

const createGame = dispatch => (players, totalTime, finalTime) => {
  dispatch({ type: 'create', payload: { players, totalTime, finalTime }})
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