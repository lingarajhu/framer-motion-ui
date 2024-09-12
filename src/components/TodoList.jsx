/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

import { useState } from "react";
import { FiClock, FiPlus, FiTrash2 } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Take out trash",
      checked: false,
      time: "5 mins",
    },
    {
      id: 2,
      text: "Do laundry",
      checked: false,
      time: "10 mins",
    },
    {
      id: 3,
      text: "Have existential crisis",
      checked: true,
      time: "12 hrs",
    },
    {
      id: 4,
      text: "Get dog food",
      checked: false,
      time: "1 hrs",
    },
  ]);

  const removeTodos = (id) => {
    setTodos((pv) => pv.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id) => {
    setTodos((pv) =>
      pv.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  return (
    <section
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%2318181b'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
      className="max-h-[150vh] relative text-neutral-50 bg-zinc-950 py-20"
    >
      <div className="max-w-xl mx-auto w-full px-4">
        <Header />
        <Todos
          todos={todos}
          handleCheck={handleCheck}
          removeTodos={removeTodos}
        />
        <Form setTodos={setTodos} />
      </div>
    </section>
  );
};

const Header = () => {
  return (
    <div className="mb-6">
      <h1 className="text-xl font-medium text-white">Good morning! ☀️</h1>
      <p className="text-zinc-400">Let's see what we've got to do today.</p>
    </div>
  );
};

const Form = ({ setTodos }) => {
  const [visible, setVisible] = useState(false);

  const [text, setText] = useState("");
  const [time, setTime] = useState(15);
  const [unit, setUnit] = useState("min");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    setTodos((pv) => [
      {
        id: Math.random(),
        text,
        checked: false,
        time: `${time} ${unit}`,
      },
      ...pv,
    ]);
  };

  return (
    <div className="relative bottom-6 my-60 left-1/2 w-full max-w-xl -translate-x-1/2">
      <AnimatePresence>
        {visible && (
          <motion.form
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 25,
            }}
            onSubmit={handleSubmit}
            className="mb-6 w-full rounded border border-zinc-700 bg-zinc-900 p-3"
          >
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What do you need to do?"
              className="resize-none h-24 w-full rounded bg-zinc-900 p-1 text-sm text-zinc-50 placeholder-zinc-500 focus:outline-none caret-zinc-50"
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <input
                  type="number"
                  className="w-24 rounded bg-zinc-700 px-1.5 py-1 text-sm text-zinc-50 focus:outline-0"
                  value={time}
                  onChange={(e) => setTime(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  onClick={() => setUnit("mins")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "mins"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  mins
                </button>
                <button
                  type="button"
                  onClick={() => setUnit("hrs")}
                  className={`rounded px-1.5 py-1 text-xs ${
                    unit === "hrs"
                      ? "bg-white text-zinc-950"
                      : "bg-zinc-300/20 text-zinc-300 transition-colors hover:bg-zinc-600 hover:text-zinc-200"
                  }`}
                >
                  hrs
                </button>
              </div>
              <button
                type="submit"
                className="rounded bg-indigo-600 px-1.5 py-1 text-xs text-indigo-50 transition-colors hover:bg-indigo-500"
              >
                Submit
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
      <button
        onClick={() => setVisible((pv) => !pv)}
        className="w-full grid place-content-center py-2 text-lg text-white px-4 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 transition-colors"
      >
        <FiPlus
          className={`transition-transform ${
            visible ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>
    </div>
  );
};

const Todos = ({ todos, handleCheck, removeTodos }) => {
  return (
    <div className="w-full space-y-3">
      <AnimatePresence>
        {todos.map((t) => (
          <Todo
            handleCheck={handleCheck}
            removeTodos={removeTodos}
            id={t.id}
            key={t.id}
            checked={t.checked}
            time={t.time}
          >
            {t.text}
          </Todo>
        ))}
      </AnimatePresence>
    </div>
  );
};

const Todo = ({ handleCheck, removeTodos, id, checked, time, children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 25,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 25,
      }}
      layout
      className="relative flex w-full items-center gap-3 rounded border border-zinc-700 bg-zinc-900 p-3"
    >
      <input
        type="checkbox"
        onChange={() => handleCheck(id)}
        checked={checked}
        className="size-4 accent-indigo-400"
      />
      <p
        className={`text-white transition-colors ${checked && "text-zinc-400"}`}
      >
        {children}
      </p>
      <div className="ml-auto flex gap-1.5">
        <div className="flex items-center gap-1.5 whitespace-nowrap rounded bg-zinc-800 px-1.5 py-1 text-xs text-zinc-400">
          <FiClock />
          <span>{time}</span>
        </div>
        <button
          onClick={() => removeTodos(id)}
          className="rounded bg-red-300/20 px-1.5 py-1 text-xs text-red-300 transition-colors hover:bg-red-600 hover:text-red-200"
        >
          <FiTrash2 />
        </button>
      </div>
    </motion.div>
  );
};

export default TodoList;
