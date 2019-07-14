import React, { useRef, useContext } from "react";
import "./app.scss";

export default function App() {
  return (
    <main className="app">
      <header>
        <h1 className="app__title">Flyckr</h1>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </header>
      <section />
    </main>
  );
}
