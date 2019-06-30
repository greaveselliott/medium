import React, { createContext, useReducer, useDebugValue } from "react";
import uuid from "web-uuid-js";

export const Store = createContext();

const initialState = {
  list: []
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_NEW_LIST_ITEM":
      return {
        ...state,
        list: state.list.concat({
          uuid: uuid(),
          listItemValue: action.payload.listItemValue
        })
      };

    case "DELETE_LIST_ITEM":
      return {
        ...state,
        list: state.list.filter(
          listItem => listItem.uuid !== action.payload.uuid
        )
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useDebugValue(state);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
