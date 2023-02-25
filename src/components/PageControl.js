import React, { useState, useEffect } from 'react';
import WelcomeSplash from './WelcomeSplash';
import MainPage from './MainPage';


function PageControl() {
  //this means splash is going to display on every render, find a one-time method
  const [welcomeVisibleOnPage, setWelcomeVisibleOnPage] = useState(true);


const handleClick = () => {
  setWelcomeVisibleOnPage(false)
}
  let currentlyVisibleState = null;
  let buttonText = null;

  if(welcomeVisibleOnPage){
    currentlyVisibleState = <WelcomeSplash />
    buttonText = "Come take a look!";
  } else if(!welcomeVisibleOnPage){
    currentlyVisibleState = <MainPage />
    buttonText = "this is a button";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {<button onClick={handleClick}>{buttonText}</button>} 
    </React.Fragment>
  );
}

export default PageControl;
