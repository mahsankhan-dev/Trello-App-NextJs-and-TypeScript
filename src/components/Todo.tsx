import React from "react";
import { myTodo } from "@/interfaces/todo";
import styles from "../styles/Home.module.css";
import ThreeDotsButtons from "./ThreeDotsButtons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface PropsData {
  todo: myTodo[];
  handleEdit: (...arg: any) => void;
  handleDelete: (...arg: any) => void;
  onDragEnd: (...arg: any) => void;
}
const Todo: React.FC<PropsData> = ({
  todo,
  handleEdit,
  handleDelete,
  onDragEnd,
}) => {
  const uniqueId = Math.random().toString(36);
  return (
    <>
      <DragDropContext onDragEnd={(results) => onDragEnd(results, "Task")}>
        <Droppable droppableId={uniqueId}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todo ? (
                <div className={styles.todo}>
                  <h1>Task</h1>
                  {todo.map((item, index) => {
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
                                  handleEdit(item.todoApp, "Todo")
                                }
                                handleDelete={() =>
                                  handleDelete(item.todoApp, "Todo")
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

export default Todo;
