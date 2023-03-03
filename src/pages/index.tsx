import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Todo from "@/components/Todo";
import Progress from "@/components/Progress";
import Done from "@/components/Done";
import { myTodo, myProgress, myDone } from "@/interfaces/todo";
import InputField from "@/components/InputField";

export default function Home() {
  const [select, setSelect] = React.useState<string>("");
  const [input, setInput] = React.useState<string>("");
  const [todo, setTodo] = React.useState<myTodo[]>([]);
  const [progress, setProgress] = React.useState<myProgress[]>([]);
  const [done, setDone] = React.useState<myDone[]>([]);
  const [editValue, setEditValue] = React.useState("");

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

  const handleEdit = (id: string) => {
    setEditValue(id);
    setInput(editValue);
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
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            />
          </div>
          <div>
            <Progress
              progress={progress}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
          <div>
            <Done
              done={done}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}
