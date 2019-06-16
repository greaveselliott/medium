import React from "react";

const List = ({ listData }) => (
  <ul>
    {listData.map(listItem => (
      <li key={listItem.id}>{listItem.title}</li>
    ))}
  </ul>
);

export default List;
