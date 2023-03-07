import React from 'react';
import { socialMedia } from '../config';
import styled from 'styled-components';
import { Icon } from '../components/icons/icon';

const Socials = () => (
  <Div>
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({url, name}, i) => (
          <li key={i}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Div>
)

export default Socials;

// STYLING
const Div = styled.div`
 display:flex;
 align-items: center;
 flex-direction:row;
 position: absolute;
 bottom: 0;

 
 /* this is so jank please fix it */
 margin-left: 60px;

`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1px;
  padding: 1px;
  list-style: none;

  &:after {
    display: block;
    width: 2px;
    height: 90px;
    margin: auto;
    background-color: #747474;
  }

  a {
    padding: 10px;
    &:hover,
    &:focus {
      transform: translateY(5px);
    }

    svg {
      width: 25px;
      height: 25px;
    }

    li {
      /* &:last-of-type {
        margin-bottom: 20px;
      } */
    }
  }
`
