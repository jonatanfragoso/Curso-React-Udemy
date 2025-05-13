import React from "react";

const Container = ({ children, teste }) => {
  return (
    <>
      {children}
      <div>Tesntando: {teste}</div>
    </>
  );
};

export default Container;
