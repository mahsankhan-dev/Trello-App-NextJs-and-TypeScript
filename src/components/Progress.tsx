import React from "react";
import { myProgress } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";

interface PropsData {
  progress: myProgress[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
}

const Progress: React.FC<PropsData> = ({
  progress,
  handleEdit,
  handleDelete,
}) => {
  return (
    <>
      {progress ? (
        <div className={styles.todo}>
          <h1>Progress</h1>
          {progress.map((item) => {
            return (
              <div className={styles.list_parent}>
                <p>{item.todoApp}</p>
                <div className={styles.actions}>
                  <ThreeDotsButtons
                    handleEdit={() => handleEdit(item.todoApp)}
                    handleDelete={() => handleDelete(item.todoApp, "Progress")}
                    // handleThreeDots={() => handleThreeDots()}
                    // isOpen={isOpen}
                  />
                </div>
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
