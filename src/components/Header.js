import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { motion as m } from 'framer-motion';


function Header() {

  return (
    <>
      <m.div>
        <H1>Hi! I'm Alex.</H1>
      </m.div>
    </>
  );
}

export default Header;

// 
const H1 = styled.h1 `
  margin-left: 280px;  
  margin-top: 0px;
  font-family: sans-serif;
  font-size: 6rem;
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  background-clip: border-box ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`