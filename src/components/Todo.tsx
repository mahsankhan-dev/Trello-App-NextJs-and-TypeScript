import React from "react";
import { myTodo } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";

interface PropsData {
  todo: myTodo[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
  handleThreeDots: () => void;
  isOpen: boolean;
}
const Todo: React.FC<PropsData> = ({
  todo,
  handleEdit,
  handleDelete,
  handleThreeDots,
  isOpen,
}) => {
  return (
    <>
      {todo ? (
        <div className={styles.todo}>
          <h1>Task</h1>
          {todo.map((item) => {
            return (
              <div className={styles.list_parent}>
                <p>{item.todoApp}</p>
                <div className={styles.actions}>
                  <ThreeDotsButtons
                    handleEdit={() => handleEdit(item.todoApp)}
                    handleDelete={() => handleDelete(item.todoApp, "Todo")}
                    handleThreeDots={handleThreeDots}
                    isOpen={isOpen}
                  />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Todo;
