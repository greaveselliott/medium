import React, { useEffect, useContext } from "react";

import { Store } from "./Store";
import { fetchDataAction } from "./Actions";
import List from "./List";

export default function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.todos.length === 0 && fetchDataAction(dispatch);
  });

  return <List listData={state.todos} />;
}
