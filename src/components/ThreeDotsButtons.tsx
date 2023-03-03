import React from "react";
import styles from "../styles/Home.module.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

interface PropsButtons {
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
}
const ThreeDotsButtons: React.FC<PropsButtons> = ({
  handleEdit,
  handleDelete,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleThreeDots = () => {
    setIsOpen(!isOpen);
  };

  const editSection = () => {
    setIsOpen(false);
    handleEdit();
  };

  const deleteSection = () => {
    setIsOpen(false);
    handleDelete();
  };
  return (
    <>
      <div className={styles.threeDots}>
        <button onClick={handleThreeDots}>...</button>
      </div>
      {isOpen ? (
        <div className={styles.threeList}>
          <ul>
            <li onClick={editSection}>
              <AiOutlineEdit color="gray" />
            </li>
            <li onClick={deleteSection}>
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
