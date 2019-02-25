import React from "react";

import useResources from "./useResources";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <ul className="ui content">
      {resources.map(record => (
        <li key={record.id}>{record.title}</li>
      ))}
    </ul>
  );
};

export default ResourceList;
