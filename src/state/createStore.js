import { createStore as reduxCreateStore } from "redux"

const initialState = { cart: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: state.cart.push(action.item),
      }
    default:
      return state
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
