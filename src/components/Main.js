import React, { useEffect, useState } from "react";
import { motion as m } from 'framer-motion';
import { SCREAMCAT } from '../img/cat-transp';

// this m.div still needs work!

function Main(){
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    setAnimate(false)
  }, []);

  return(
    <div>
      {animate && (
      <m.div 
        initial={{ y: '100vh' }}
        animate={{ y: '50vh' }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 1, ease: "easeOut" }}
        >   
          <img
            src={ SCREAMCAT }
            alt="A lil' cat"
            style={{justifyContent: 'center'}}
            className={`image-animation ${animate ? "active" : ""}`}
          /> 
      </m.div>
      )}
    </div>
  );
}

export default Main;

//<h1 style={{textAlign: 'center', justifyContent: 'center',  color: '#fff'}}>
//           Fgsfds!
//         </h1> 