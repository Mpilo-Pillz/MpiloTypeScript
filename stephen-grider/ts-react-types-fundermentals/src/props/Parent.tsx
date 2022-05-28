import React from "react";

import Child from "./Child";
import SimpleChild from "./SimpleChild";

const Parent: React.FC = () => {
  return (
    <>
      <SimpleChild
        color="purple"
        onClick={() => {
          console.log("Clicked");
        }}
      />
      <Child
        color="grey"
        onClick={() => {
          return;
        }}
      >
        This comes in as a prop called children
      </Child>
    </>
  );
};

export default Parent;
