import React from "react";
import styles from "../styles/Home.module.css";

import { myDone } from "@/interfaces/todo";

interface PropsData {
  done: myDone[];
}
const Done: React.FC<PropsData> = ({ done }) => {
  return (
    <>
      {done ? (
        <div className={styles.todo}>
          <h1>Done</h1>
          {done.map((item) => {
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

export default Done;
