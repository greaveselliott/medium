export const fetchDataAction = async dispatch => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON
  });
};
