import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input onChange={(e) => console.log(e)} />
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
