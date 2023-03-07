import React from "react";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";
import { myDone } from "@/interfaces/todo";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface PropsData {
  done: myDone[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
  onDragEnd: (...arg: any) => void;
}

const Done: React.FC<PropsData> = ({
  done,
  handleEdit,
  handleDelete,
  onDragEnd,
}) => {
  const uniqueId = Math.random().toString(36);
  return (
    <>
      <DragDropContext onDragEnd={(results) => onDragEnd(results)}>
        <Droppable droppableId={uniqueId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {done ? (
                <div className={styles.todo}>
                  <h1>Done</h1>
                  {done.map((item, index) => {
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
                                  handleEdit(item.todoApp, "Done")
                                }
                                handleDelete={() =>
                                  handleDelete(item.todoApp, "Done")
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

export default Done;
