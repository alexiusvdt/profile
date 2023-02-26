import React, { useState, useEffect } from 'react';
// import MainPage from './MainPage';


function PageControl() {
// set up a useEffect for branching conditionals.
// if loading, return loading image
// if not loading & on home feed first image

  let currentlyVisibleState = "placeholder state";
  let buttonText = "bottom text";

  // if(welcomeVisibleOnPage){
  //   currentlyVisibleState = <WelcomeSplash />
  //   buttonText = "Come take a look!";
  // } else if(!welcomeVisibleOnPage){
  //   currentlyVisibleState = <MainPage />
  //   buttonText = "this is a button";
  // }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {/* {<button onClick={handleClick}>{buttonText}</button>}  */}
    </React.Fragment>
  );
}

export default PageControl;
