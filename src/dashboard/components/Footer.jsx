import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: block;
    background-color: var(--color-transparent);
    background-repeat: no-repeat;
    color: var(--color-text-light);
    outline: none;
    border: none;
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 0.8rem;
    cursor: pointer;
:hover {
    cursor: pointer;
    transition: var(--time-s);
}`;

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-footer);
  color: var(--color-text-accent);
`;
/**
 * The footer.
 */
class Footer extends React.Component {
  render() {
    var { routes, onClick } = this.props;
    if (Array.isArray(routes)) {
      return (
        <StyledFooter>
          <div>Blah blah blah</div>
          {
            routes.map((item) => (
              <Link href={item.route} key={item.route} onClick={() => onClick(item.route)}>
                {item.title}
              </Link>
            ))
          }
          <div>&copy; 2019 Veridition</div>
        </StyledFooter>
      );
    }
    return (<StyledFooter />);
  }
}
export default Footer;
