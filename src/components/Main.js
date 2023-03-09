import React from "react";
import { motion as m } from 'framer-motion';

// this m.div still needs work!

function Main(){
  return(
    <m.div 
      initial={{opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      >
      <div>
        <h1 style={{textAlign: 'center', justifyContent: 'center',  color: '#fff'}}>
          Fgsfds!
        </h1>
      </div>
    </m.div>
  );
}

export default Main;