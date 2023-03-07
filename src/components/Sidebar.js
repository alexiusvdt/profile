import React from "react";
// only need the function...
import PageControl from './PageControl'
import Projects from "./Projects";

function UpdatePane(selection){
  setRightContent(selection)
}

function Sidebar(){
  return(
    <>
    <p>sidebar!</p>
    <button onClick={updatePane(<Projects />)}>Projects</button>
    <button onClick={updatePane(<ContactMe />)}>ContactMe</button>
    </>
  );
}

export default Sidebar;