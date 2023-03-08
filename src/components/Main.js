import React from "react";
import { motion as m } from 'framer-motion';

function Main(){
  return(
    <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75 }}
    >
      <div className="my-96 p-1">
        <h1 className="text-6x1 text-center lg:text-right lg: text-9x1">
          Hello there!
        </h1>
      </div>
    </m.div>
  );
}

export default Main;