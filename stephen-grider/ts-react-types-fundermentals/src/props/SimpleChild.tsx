interface SimpleChildPRops {
  color: string;
  onClick: () => void;
}

const SimpleChild = ({ color, onClick }: SimpleChildPRops) => {
  return <div>{color}</div>;
};

// down side is that it will not knoe about the other React Functional Component Props
// Does not know that this is a React Component
export default SimpleChild;
