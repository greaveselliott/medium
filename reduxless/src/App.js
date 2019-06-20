import React, { useEffect, useContext } from "react";

import { Store } from "./Store";
import { fetchDataAction } from "./Actions";
import "./app.scss";

export default function App() {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.todos.length === 0 && fetchDataAction(dispatch);
  });

  return (
    <main className="app">
      <h1 className="app__title">To do list.</h1>
      <form className="app__form">
        <input type="text" className="app__input" />
        <input
          type="submit"
          className="app__input-submit"
          value="Add to list"
        />
      </form>
      <ul className="app__list">
        {state.todos.map(listItem => (
          <li className="app__list-item" key={listItem.id}>
            {listItem.title}
            <button className="app__list-item-delete">Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
