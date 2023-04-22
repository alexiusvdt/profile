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
      <div>
        <h1 style={{ textAlign: 'center', justifyContent: 'center', color: 'black' }}>
          Hi, I&apos;m Alex! This is under heavy construction so please be patient!
        </h1>
      </div>
    </m.div>
  );
}

export default Main;
