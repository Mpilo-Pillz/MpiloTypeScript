interface PresentationProps {
  color: string;
  children?: React.ReactNode;
}

const Presentation: React.FC<PresentationProps> = (props) => {
  const { color, children } = props;
  return (
    <>
      {color}
      {children}
    </>
  );
};

export default Presentation;
