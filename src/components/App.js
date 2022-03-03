import React from "react";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import '../assets/css/app.css';

function App(){
  return(
    
    <div id="wrapper">
      <SideBar/>
      <ContentWrapper/>
    </div>
  )
}

export default App;
