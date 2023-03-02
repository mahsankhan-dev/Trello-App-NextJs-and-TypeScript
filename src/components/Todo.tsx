import React from "react";
import { myTodo } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";

interface PropsData {
  todo: myTodo[];
}
const Todo: React.FC<PropsData> = ({ todo }) => {
  return (
    <>
      {todo ? (
        <div className={styles.todo}>
          <h1>Todo</h1>
          {todo.map((item) => {
            return (
              <div className={styles.list_parent}>
                <p>{item.todoApp}</p>
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
