export const createNewListItem = ({ dispatch, payload }) => {
  return dispatch({
    type: "CREATE_NEW_LIST_ITEM",
    payload
  });
};

export const deleteNewListItem = ({ dispatch, payload }) => {
  return dispatch({
    type: "DELETE_LIST_ITEM",
    payload
  });
};
