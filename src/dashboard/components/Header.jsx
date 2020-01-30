import React from 'react';
import styled from 'styled-components';

import { Hamburger } from './Hamburger';

const Button = styled.button`
    display: block;
    background: var(--color-transparent);
    cursor: pointer;
    border: none;
    text-transform: capitalize;
    text-decoration: none;
    text-align: center;
    color: var(--color-accent);
    padding: 1rem;
:hover {
    transform: var(--scale-m);
    transition: var(--time-s);
    box-shadow: var(--border-hover);
}
`;
const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-header);
`;
/**
 * The Header is a collection of application routes organized
 * horizontally.
 *   background-image: radial-gradient(closest-side at 65% 55%,
 *                      var(--color-light), var(--color-dark));
 */
class Header extends React.Component {
  render() {
    var { routes, onClick } = this.props;
    if (Array.isArray(routes)) {
      return (
        <StyledHeader>
          <Hamburger onClick={() => onClick('Hamburger')} />
          {routes.map((item) => (
            <Button key={item.route} onClick={() => onClick(item.route)}>
              {item.title}
            </Button>
          ))}
        </StyledHeader>
      );
    }
    return (<StyledHeader />);
  }
}
export default Header;
