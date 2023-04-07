
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css'
import React, { useState } from 'react';

const App = () => {
  const [activetab, setactivetab] = useState("")
  const [content, setcontent] = useState("")
  let click = (f,e) => 
  {
    if (e == "1") 
    {
   
      setactivetab("1");
      setcontent("This is Tab_1")

    }
    else if (e == "2") {

     
      setactivetab("2");
      setcontent("This is Tab_2");

    }
    else
    {
    
      setactivetab("3");
      setcontent("This is Tab_3");

    }

  }
  return (
    <div className='flexcontainer'>
      <ul>
        <div style={{  background: activetab === "1" ? "black" : "white", color: activetab === "1" ? "white" : "black" }} onClick={(e) => click(e,"1")}>
          <li>Tabe_1</li>
        </div>
        <div style={{  background: activetab === "1" ? "black" : "white", color: activetab === "2" ? "white" : "black" }} onClick={(e) => click(e,"2")
        }>
          <li>Tabe_2</li>
        </div>
        <div style={{ background: activetab === "1" ? "black" : "white", color: activetab === "3" ? "white" : "black" }} onClick={(e) => click(e,"3")}>
          <li>Tabe_3</li>
        </div>
      </ul>
      <div>
        <div style={{ textAlign: "center", justifyContent: "center", border: "1px solid", height: "30vh" }}>{content}</div>
      </div>
    </div>
  );
}

export default App;