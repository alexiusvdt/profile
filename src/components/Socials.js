import React from 'react';
import { socialMedia } from '../config';
import styled from 'styled-components';
import { Icon } from '../components/icons/icon';


const Socials = () => (
  <div orientation="left">
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
  </div>
)

export default Socials;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
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
      width: 20px;
      height: 20px;
    }

    li {
      &:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
`
