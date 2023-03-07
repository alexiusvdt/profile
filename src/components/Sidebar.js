import React from "react";

// sidebar is selecting the content & switching it to pagecontrol
// pagecontrol is rendering left & right bar
// pass the prop (ie content to render) up to pagecontrol
// in pagecontrol, render whatever prop is passed to it
// dont try to copy props into state because that causes errors 


function Sidebar(){
  // const handleSwitch = () => undefinedFunc("hi")

  return(
    <>
    <p>sidebar!</p>
    <button 
      // onClick={handleSwitch}
      >switch</button>
    <button >ContactMe</button>
    </>
  );
}

export default Sidebar;