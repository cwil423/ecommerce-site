import { createStore as reduxCreateStore } from "redux"

const initialState = { cart: [] }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const index = state.cart.indexOf(action.item)
      if (index === -1) {
        return {
          ...state,
          cart: [...state.cart, action.item],
        }
      } else {
        let cart = [...state.cart]
        cart[index].amount += 1
        return {
          ...state,
          cart,
        }
      }
    }
    case "INCREMENT": {
      let cart = [...state.cart]
      let total = state.total
      cart.forEach(element => {
        if (element.id === action.id) {
          element.amount += 1
        }
      })
      return {
        ...state,
        cart,
      }
    }
    case "DECREMENT": {
      let total = state.total
      const index = state.cart.findIndex(item => item.id === action.id)
      let cart = [...state.cart]
      cart.forEach(element => {
        if (element.id === action.id && element.amount != 0) {
          element.amount -= 1
        }
        if (element.id === action.id && element.amount === 0) {
          cart.splice(index, 1)
        } else return
      })
      return {
        ...state,
        cart,
      }
    }

    default:
      return state
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
