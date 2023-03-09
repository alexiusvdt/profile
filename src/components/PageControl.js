import React from 'react';
import styled from "styled-components";
import { BrowserRouter as Router} from "react-router-dom";
// import Header from './Header';
import Sidebar from './Sidebar';
import AnimatedRoutes from './AnimatedRoutes';


function PageControl(){

  return (
    <Router>
        <Pane1>
          <Sidebar />
        </Pane1 >
        <Pane2>
          <AnimatedRoutes />
        </Pane2>
    </Router>
  );
}

export default PageControl;

// STYLES

// don't need this
// const Container = styled.div`
//   display: flex;
// `;

// if changin width here, also adjust width of header
// todo: make panel weight a state effect
const Pane1 = styled.div`
    /* border: 1px solid blue; */
  width: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: black;
`;

const Pane2 = styled.div`
  /* border: 1px solid red; */
  margin-left: 250px;
  height: 100vh;
  flex: 1;
  background-color: black;
`;

// const Div1 = styled.div`
//   background-color: black;
/* border: 1px solid green; */
// `;
