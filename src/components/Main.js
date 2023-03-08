import React from "react";
import { motion as m } from 'framer-motion';

// this m.div still needs work!

function Main(){
  return(
    <m.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    // implement tailwind?
    // className='text-gray-900 absolute top-0 left-0 w-full h-full lg:px-48 px-16'
    >
      <div>
        <h1 className="text-center text-white">
          Fgsfds!
        </h1>
      </div>
    </m.div>
  );
}

export default Main;