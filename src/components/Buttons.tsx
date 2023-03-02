import React from "react";

interface PropsData {
  onClick: () => void;
  children: React.ReactNode;
}
const Buttons: React.FC<PropsData> = ({ onClick, children }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  );
};

export default Buttons;
