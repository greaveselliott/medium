import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  list: []
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_NEW_LIST_ITEM":
      const newState = {
        ...state,
        list: state.list.concat({
          createdAt: new Date().toString(),
          listItemValue: action.payload.listItemValue
        })
      };

      console.log(newState);
      return newState;

    case "DELETE_LIST_ITEM":
      return {
        ...state,
        list: state.list.filter(
          listItem => listItem.createdAt !== action.payload.createdAt
        )
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
