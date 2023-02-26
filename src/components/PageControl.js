import React, { useState, useEffect } from 'react';
import Socials from './Socials';


function PageControl() {
  const [isHome, setIsHome] = useState(true);

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
  if(isHome)
    return (
      <React.Fragment>      
        <Socials />
      </React.Fragment>
    );
}

export default PageControl;
