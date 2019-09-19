import React from "react";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
