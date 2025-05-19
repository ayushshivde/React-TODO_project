import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Read = (props) => {
  const { todos, settodos } = props;

  const deleteHandler = (id) => {
    let filterTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    settodos(filterTodo);
toast.error("Task Deleted Successfully", {
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

  const renderTodos = todos.map((todo) => {
    return (
      <div key={todo.id} className="relative">
        
        <li
          className=" fade-in-up  flex items-center justify-between px-4  p-1.5 bg-[#F1F2F3] w-[100%] rounded-sm my-3 h-10 border-black border-2 text-lg font-medium"
          key={todo.id}
        >

          {" "}
          {todo.title}
          <button
            className="absolute right-0.5 w-20 top-0.5 rounded-sm  text-sm font-medium text-center h-9 "
            onClick={() => deleteHandler(todo.id)}
          >
            {" "}
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      </div>
    );
  });

  return (
    <>
      <ol className=" w-90 bg-white p-4 rounded-sm  border-black border-2  shadow-xl sm:w-120">
        <p className="text-center">"Make Your Day Productive"</p>
        {renderTodos}
      </ol>
    </>
  );
};

export default Read;
