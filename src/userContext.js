import React, { createContext, useContext, useReducer } from 'react'

const StoreContext = createContext()
const initialState = {username: "", user_id: 0, message: ""}

const reducer = (state, action) => {
  switch (action.type) {
    case "update_user":
      return {
        username: action.user.username,
        user_id: action.user.id,
        message: action.message
      }
    case "delete_user": 
      return {
        username: "",
        user_id: 0,
        message: action.message
      }
    default: 
    throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);