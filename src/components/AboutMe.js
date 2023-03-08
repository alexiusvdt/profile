import React from "react";
import Headshot from '../img/headshot.png';
import styled from "styled-components";

function AboutMe(){
  return(
    <>
    <Div>
      <div>
        <P>Hi, I'm Alex, a junior developer looking to make their mark on the industry. 
          I specialize in creating user-friendly websites and mobile apps with an eye to accessability 
          as well as functionality and stability. I'm passionate about creating unique and innovative 
          applications that help businesses achieve their goals. In my free time, I enjoy exploring 
          new technologies, riding my bicycle (currently training for <a href="https://ridetherimoregon.com/" target="_blank" rel="noreferrer">Ride The Rim Oregon</a>) 
          and playing tabletop role playing games with my friends. My ultimate goal is to create designs that 
          not only look great but also solve real-world problems for my clients!</P>
      </div>
      <div>
        <img src={Headshot} width={450} height={350} alt="My headshot"></img>
      </div>
    </Div>
    
   
    </>
  );
}

export default AboutMe;

// STYLE
const Div = styled.div`
 display:flex;
 align-items: center;
 flex-direction:row;
 height: "100vh";
`;

const P = styled.p`
  text-align: center;
  color: #fff;
  justify-content: center;
`;