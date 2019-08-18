import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./normalize.scss";

import { Home, About, Gallery, Contact, Navigation } from "./components";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  );
}

export default App;
