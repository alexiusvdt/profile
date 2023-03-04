const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    &: last-of-type {
      margin-bottom: 10px;
    }

    a {
      padding: 10px;
      &: hover,
      &: focus {
        transform: translate Y(5px);
      }
      
    }
  }
`;
