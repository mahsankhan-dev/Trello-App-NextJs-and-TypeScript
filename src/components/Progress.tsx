import React from "react";
import { myProgress } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";

interface PropsData {
  progress: myProgress[];
}

const Progress: React.FC<PropsData> = ({ progress }) => {
  return (
    <>
      {progress ? (
        <div className={styles.todo}>
          <h1>Progress</h1>
          {progress.map((item) => {
            return (
              <div className={styles.list_parent}>
                <p>{item.todoApp}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <>hello</>
      )}
    </>
  );
};

export default Progress;
