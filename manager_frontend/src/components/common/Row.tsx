import React from "react";

const Row = ({ children }: { children?: React.ReactNode }) => {
  return <div className="row">{children}</div>;
};

export default Row;
