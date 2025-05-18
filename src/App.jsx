import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css"
const App = () => {
  
  const [todos, settodos] = useState([
    { id: 1, title: "Todo 1", iscompleted: false },
    { id: 2, title: "Todo 2", iscompleted: false },
  ]);

  return (
    <div className="container  flex  flex-col items-center justify-start bg-y w-[100vw] h-screen gap-8"
    
      style={{
    backgroundImage: "url('src/assets/images/bg_img.webp')",
    backgroundSize: 'contain',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
   
  }}
    
    
    >
      <Create todos={todos} settodos={settodos}/>
     
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
