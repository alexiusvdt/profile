import React, {useState, useEffect} from "react";
import styled from "styled-components";

const headerStyle = {
  position: 'sticky',
  top: 10,
  backgroundColor: '#BFDBFE',
  height: "6rem",
  transitionProperty: "all",
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "500ms",
}

function Header() {
  // const scrollDirection = useScrollDirection();
  
  // function useScrollDirection() {
  //   const [scrollDirection, setScrollDirection] = useState(null);
  
  //   useEffect(() => {
  //     let lastScrollY = window.pageYOffset;
  
  //     const updateScrollDirection = () => {
  //       const scrollY = window.pageYOffset;
  //       const direction = scrollY > lastScrollY ? "down" : "up";
  //       if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
  //         setScrollDirection(direction);
  //       }
  //       lastScrollY = scrollY > 0 ? scrollY : 0;
  //     };
  //     window.addEventListener("scroll", updateScrollDirection); // add event listener
  //     return () => {
  //       window.removeEventListener("scroll", updateScrollDirection); // clean up
  //     }
  //   }, [scrollDirection]);
  
  //   return scrollDirection;
  // };

  return (
    <>
    {/* styling isn't applying, why? tried nesting & alternate methods...maybe try inline styling next? */}
      <div>
      {/* <div style={`headerStyle ${scrollDirection === "down" ? "hide" : "show"}`}> */}
        <H1>Hi! I'm Alex.</H1>
      </div>
    </>
  );
}

export default Header;

// STYLING

const P = styled.p`
  color: #fff;
`
const H1 = styled.h1 `
  margin-left: 250px;  
  margin-top: 0px;
  // margin-bottom: 10px;
  font-family: sans-serif;
  font-size: 6rem;
  background: linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid green;
`