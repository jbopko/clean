import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    z-index:2;
@media only screen and (min-width: 640px) {
  display: none;
}
:hover {
    transition: var(--time-s);
    transform: var(--scale-m);
}
`;
const StyledTop = styled.div`
    height: 2px;
    width: 20px;
    background-color: var(--color-white);
    margin-bottom: 5px;
`;
const StyledMiddle = styled.div`
    height: 2px;
    width: 20px;
    background-color: var(--color-white);
    opacity: 1;
`;
const StyledBottom = styled.div`
    height: 2px;
    width: 20px;
    background-color: var(--color-white);
    margin-top: 5px;
`;

export function Hamburger(props) {
  var { onClick } = props;
  return (
    <StyledIcon onClick={onClick}>
      <StyledTop />
      <StyledMiddle />
      <StyledBottom />
    </StyledIcon>
  );
}
