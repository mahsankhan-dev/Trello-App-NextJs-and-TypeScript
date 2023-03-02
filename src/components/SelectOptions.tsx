import React from "react";
import styles from "../styles/Home.module.css";

interface PropsData {
  select: string;
  handleSelect: (...arg: any) => void;
}

const SelectOptions: React.FC<PropsData> = ({ select, handleSelect }) => {
  return (
    <>
      <select name="DropDown" value={select} onChange={handleSelect}>
        <option value="Task">Task</option>
        <option value="Progress">Progress</option>
        <option value="Done">Done</option>
      </select>
    </>
  );
};

export default SelectOptions;
