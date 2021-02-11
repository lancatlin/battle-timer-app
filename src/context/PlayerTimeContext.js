import createDataContext from './createDataContext'

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const { Context, Provider } = createDataContext(
  reducer,
  {},
  [],
)