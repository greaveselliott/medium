import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./normalize.scss";

import { Navigation } from "./components";

const paths = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" }
];

const LazyHome = React.lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./components/Home/Home")
);
const LazyAbout = React.lazy(() =>
  import(/* webpackChunkName: "AboutPage" */ "./components/About/About")
);
const LazyGallery = React.lazy(() =>
  import(/* webpackChunkName: "GalleryPage" */ "./components/Gallery/Gallery")
);
const LazyContact = React.lazy(() =>
  import(/* webpackChunkName: "ContactPage" */ "./components/Contact/Contact")
);

function App() {
  return (
    <BrowserRouter>
      <Navigation config={paths} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={LazyHome} />
        <Route path="/about" component={LazyAbout} />
        <Route path="/gallery" component={LazyGallery} />
        <Route path="/contact" component={LazyContact} />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
