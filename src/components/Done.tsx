import React from "react";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";
import { myDone } from "@/interfaces/todo";

interface PropsData {
  done: myDone[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
}
const Done: React.FC<PropsData> = ({ done, handleEdit, handleDelete }) => {
  return (
    <>
      {done ? (
        <div className={styles.todo}>
          <h1>Done</h1>
          {done.map((item) => {
            return (
              <div className={styles.list_parent}>
                <p>{item.todoApp}</p>
                <div className={styles.actions}>
                  <ThreeDotsButtons
                    handleEdit={() => handleEdit(item.todoApp)}
                    handleDelete={() => handleDelete(item.todoApp, "Done")}
                    // handleThreeDots={() => handleThreeDots()}
                    // isOpen={isOpen}
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

export default Done;
