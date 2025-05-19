import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./index.css"
import bgImg from './assets/images/bg.img.jpg'; 
const App = () => {
  
  const [todos, settodos] = useState([
    { id: 1, title: "Todo 1", iscompleted: false },
    { id: 2, title: "Todo 2", iscompleted: false },
  ]);

    console.log(bgImg)
  return (
    <div className="container  flex  flex-col items-center justify-start bg-y w-[100vw] h-screen gap-8"
    
      style={{
    backgroundImage: `url(${bgImg})`,
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
