import React from "react";

interface WrapperProp {
  children: React.ReactNode;
}

const Container = ({ children }: WrapperProp) => {
  return <div className="flex-container">{children}</div>;
};

export default Container;
