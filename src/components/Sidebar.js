import React from "react";
// only need the function...
import PageControl from './PageControl'

function UpdatePane(selection){
  setRightContent(selection)
}

function Sidebar(){
  return(
    <>
    <p>sidebar!</p>
    <button onClick={updatePane}>Projects</button>
    <button onClick={updatePane}>ContactMe</button>
    </>
  );
}

export default Sidebar;