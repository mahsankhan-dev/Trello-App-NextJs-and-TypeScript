import React from "react";
import styles from "@/styles/Home.module.css";
import Todo from "@/components/Todo";
import Progress from "@/components/Progress";
import Done from "@/components/Done";
import { myTodo, myProgress, myDone } from "@/interfaces/todo";
import InputField from "@/components/InputField";
import { DropResult } from "react-beautiful-dnd";
import Header from "@/components/Header";

export default function Home() {
  const [select, setSelect] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [todo, setTodo] = React.useState<myTodo[]>([]);
  const [progress, setProgress] = React.useState<myProgress[]>([]);
  const [done, setDone] = React.useState<myDone[]>([]);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const emptyInputFIeld = () => {
    setInput("");
  };

  const addList = () => {
    if (input.replaceAll(" ", "").length > 0) {
      if (select === "Done") {
        const newTodo: myDone = { todoApp: input };
        setDone((pre) => [...pre, newTodo]);
        console.log("done", done);
      } else if (select === "Progress") {
        const newTodo: myProgress = { todoApp: input };
        setProgress((pre) => [...pre, newTodo]);
        console.log("progress", progress);
      } else {
        const newTodo: myTodo = { todoApp: input };
        setTodo((pre) => [...pre, newTodo]);
        console.log("Todo", todo);
      }
      emptyInputFIeld();
    } else {
      alert("Please fill the field");
    }
  };

  const handleEdit = (oldTask: string, category: string) => {
    setInput(oldTask);
    if (category === "Done") {
      setDone((pre) => pre.filter((list) => list.todoApp !== oldTask));
    } else if (category === "Progress") {
      setProgress((pre) => pre.filter((list) => list.todoApp !== oldTask));
    } else {
      setTodo((pre) => pre.filter((list) => list.todoApp !== oldTask));
    }
  };

  const handleDelete = (id: string, category: string) => {
    if (category === "Done") {
      setDone((pre) => pre.filter((list) => list.todoApp !== id));
    } else if (category === "Progress") {
      setProgress((pre) => pre.filter((list) => list.todoApp !== id));
    } else {
      setTodo((pre) => pre.filter((list) => list.todoApp !== id));
    }
  };

  const onDragEnd = (result: DropResult, category: string) => {
    if (category === "Task") {
      const { source, destination } = result;
      if (!destination) return;

      const items = Array.from(todo);
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder);

      setTodo(items);
    } else if (category === "Progress") {
      const { source, destination } = result;
      if (!destination) return;

      const items = Array.from(progress);
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder);

      setProgress(items);
    } else {
      const { source, destination } = result;
      if (!destination) return;

      const items = Array.from(done);
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder);

      setDone(items);
    }
  };

  return (
    <>
      <Header title="Create Next App" />
      <main className={styles.main}>
        <InputField
          handleInput={handleInput}
          handleSelect={handleSelect}
          select={select}
          addList={addList}
          input={input}
        />

        <div className={styles.main_cards}>
          <div>
            <Todo
              todo={todo}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              onDragEnd={onDragEnd}
            />
          </div>
          <div>
            <Progress
              progress={progress}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              onDragEnd={onDragEnd}
            />
          </div>
          <div>
            <Done
              done={done}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              onDragEnd={onDragEnd}
            />
          </div>
        </div>
      </main>
    </>
  );
}
