import React from "react";
import "./page.scss";

const Page = ({ children, heading }) => (
  <article className="page">
    <h1 className="page__heading">{heading}</h1>
    <div className="page__content">{children}</div>
  </article>
);

export default Page;
