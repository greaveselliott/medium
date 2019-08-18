import React from "react";
import "./page.scss";

const Page = ({ children, heading }) => (
  <article className="page">
    <h1 className="page__heading">{heading}</h1>
    {children}
  </article>
);

export default Page;
