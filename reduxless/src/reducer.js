import uuid from "web-uuid-js";

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

export default reducer;
