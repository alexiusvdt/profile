import React, { useState } from "react";
import { motion as m } from 'framer-motion';
import Logo from '../img/aLogo.png'


function Main(){
  const [playAnimation, setPlayAnimation] = useState(true);

  const onAnimationComplete = () => {
    setPlayAnimation(false)
  }

  return(
    <m.div>
      <img 
        src={Logo}
        alt={"A logo"}
        visible={{ opacity: 1, scale: 1}}
        initial={{opacity: 0, scale: 0.5}}
        animate={playAnimation ? "visible" : "hidden"}
        exit={{opacity: 0, scale: 0.5}}
        onAnimationComplete={onAnimationComplete}
        />
    </m.div>
  );
}

export default Main;