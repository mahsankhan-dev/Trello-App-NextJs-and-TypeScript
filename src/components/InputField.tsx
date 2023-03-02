import React from "react";
import Buttons from "./Buttons";
import SelectOptions from "./SelectOptions";
import styles from "../styles/Home.module.css";

interface PropsData {
  handleInput: (...arg: any) => void;
  handleSelect: (...arg: any) => void;
  select: string;
  addList: () => void;
}

const InputField: React.FC<PropsData> = ({
  handleInput,
  handleSelect,
  select,
  addList,
}) => {
  return (
    <>
      <div className={styles.main_inputs}>
        <input
          type="text"
          placeholder="Enter your task"
          onChange={handleInput}
        />
        <SelectOptions handleSelect={handleSelect} select={select} />
        <Buttons onClick={addList} children={"Add List"} />
      </div>
    </>
  );
};

export default InputField;
