import React from "react";
import { motion as m } from 'framer-motion';

function Main(){
  return(
    <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    className="text-gray-900 absolute top-0 left-0 w-full h-full bg-teal-100 lg:px-48 px-16">
      <div className="my-96 p-1">
        <h1 className="text-6x1 text-center lg:text-right lg:text-9x1">
          Hello there!
        </h1>
      </div>
    </m.div>
  );
}

export default Main;