import React from "react";
import { myProgress } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface PropsData {
  progress: myProgress[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
  onDragEnd: (...arg: any) => void;
}

const Progress: React.FC<PropsData> = ({
  progress,
  handleEdit,
  handleDelete,
  onDragEnd,
}) => {
  const uniqueId = Math.random().toString(36);

  return (
    <>
      <DragDropContext onDragEnd={(results) => onDragEnd(results, "Progress")}>
        <Droppable droppableId={uniqueId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {progress ? (
                <div className={styles.todo}>
                  <h1>Progress</h1>
                  {progress.map((item, index) => {
                    return (
                      <Draggable
                        index={index}
                        key={item.todoApp}
                        draggableId={item.todoApp}
                      >
                        {(provided) => (
                          <div
                            className={styles.list_parent}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                          >
                            <p {...provided.dragHandleProps}>{item.todoApp}</p>
                            <div className={styles.actions}>
                              <ThreeDotsButtons
                                handleEdit={() =>
                                  handleEdit(item.todoApp, "Progress")
                                }
                                handleDelete={() =>
                                  handleDelete(item.todoApp, "Progress")
                                }
                              />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                </div>
              ) : (
                <></>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default Progress;
