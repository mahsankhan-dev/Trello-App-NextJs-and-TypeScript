import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface PropsButtons {
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
  handleThreeDots: () => any;
  isOpen: boolean;
}
const ThreeDotsButtons: React.FC<PropsButtons> = ({
  handleEdit,
  handleDelete,
  handleThreeDots,
  isOpen,
}) => {
  // const [isOpen, setIsOpen] = React.useState(false);

  // const handleThreeDots = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <div className={styles.threeDots}>
        <button onClick={handleThreeDots}>...</button>
      </div>
      {isOpen ? (
        <div className={styles.threeList}>
          <ul>
            <li onClick={handleEdit}>
              <AiOutlineEdit color="gray" />
            </li>
            <li onClick={handleDelete}>
              <AiOutlineDelete color="red" />
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ThreeDotsButtons;
