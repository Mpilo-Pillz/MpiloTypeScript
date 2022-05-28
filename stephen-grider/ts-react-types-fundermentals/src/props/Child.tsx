import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}
const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default Child;

// Below are exclusive to React  Functional Components
// propTypes
// displayName
// defaultProps
// contextTypes

// Child.displayName
// Child.contextTypes
