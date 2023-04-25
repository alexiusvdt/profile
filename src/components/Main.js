import React from 'react';
import { motion as m } from 'framer-motion';

function Main() {
  return (
    <m.div
      initial={{ y: '100vh' }}
      animate={{ y: '50vh' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 1,
        ease: 'easeOut',
      }}
    >
      <div className="text-center z-10">
        <h2>Hi, I&apos;m Alex!</h2>
        <p>Dont mind the dust, this is still a work in progress, after all!</p>
      </div>
    </m.div>
  );
}

export default Main;
