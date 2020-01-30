import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Logo } from './Logo';

const StyledSidebar = styled.aside`
    grid-area: sidenav;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
    transform: var(--hide-left);
    transition: var(--ease);
    background: var(--bg-sidebar);
ul {
    padding:0;
    margin:var(--margin);
    list-style-type: none;
}
li {
  margin: 0;
  padding: var(--padding);
  color: var(--color-gray-light);
  text-align: center;
}
li:hover {
  cursor: pointer;
  filter: var(--filter-brighten);
  transform: var(--scale-m);
  transition: var(--time-xs);
  border: var(--border-light);
}
@media only screen and (min-width: 640px) {
    position: relative;
    transform: translateX(0);
}
`;
class Sidebar extends React.Component {
  render() {
    var { routes, active } = this.props;

    if (Array.isArray(routes)) {
      return (
        <StyledSidebar active={active}>
          <Logo src={logo} />
          <ul>
            {
              routes.map((item) => (
                <li key={item.route} onClick={(i) => this.props.onClick(item.route)}>
                  {item.title}
                </li>
              ))
            }
          </ul>
        </StyledSidebar>
      );
    }
    return (<StyledSidebar />);
  }
}
export default Sidebar;
