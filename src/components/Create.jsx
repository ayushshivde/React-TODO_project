import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";
import { faTableList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";

const Create = (props) => {
  const { todos, settodos } = props;

  console.log(todos);

  const [title, settitle] = useState("");
  const [shake, setshake] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setshake(true);
      setTimeout(() => setshake(false) , 200)
      return;
    }
    let newTodo = {
      id: nanoid(),
      title: title,
      iscompleted: false,
    };

    settodos([newTodo, ...todos]);
    settitle("");

    toast.success("Task Added Successfully", {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  className: "my-toast",

    });
  };

  return (
    <>
      <form className="mt-20   w-90 sm:w-120 " onSubmit={submitHandler}>
        <h3 className="text-center text-3xl font-bold mb-2.5   sm:text-4xl sm:mb-8">
          To Do list{" "}
          <span className="ml-5">
            <FontAwesomeIcon icon={faTableList} />
          </span>{" "}
        </h3>
        <div className={`relative  ${shake ? "shake" : ""}`} >
          <input
            type="text"
            placeholder="Add new Task"
            onChange={(e) => settitle(e.target.value)}
            value={title}
            className={`pl-5  bg-white  w-[100%] h-10 rounded-sm  placeholder:text-sm placeholder:opacity-80  shadow-xl border-black border-2  placeholder:font-semibold
              
             
              
              `}
          />
          <button className="absolute right-0.5 w-20 top-0.5 rounded-sm text-white mt-0.5 mr-1 text-center h-8 text-sm font-semibold bg-yellow-500  hover:bg-yellow-600 active:scale-95">
            Add Task
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
