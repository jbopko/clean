import React from 'react';
import styled from 'styled-components';

import '../styles/dashboard.css';
import '../styles/animations.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

// const StyledDashboard = styled.div.attrs((props) => ({
const StyledDashboard = styled.div.attrs(() => ({
  // we can define static props
  type: 'dashboard',
}))`
  display: grid;
  height: auto;
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";

@media only screen and (min-width: 640px) {
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidenav content"
    "footer footer";
}
.active {
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidenav content"
    "footer footer";
    transform: translateX(0);
}
.inactive {
  grid-template-rows: 50px 1fr 50px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
    transform: translateX(-205px);
}
`;
/**
 * Handle a click on the header navigation.
 *
 * @param {string} route - the navigation key for routing
 */
export function headerClick(/* string */ route) {
  console.log(`Header - Routing time... user clicked: ${route}`);
}

export function toggleSidebar() {
  const currentState = this.state.sidebarVisible;
  this.setState({ sidebarVisible: !currentState });
  console.log(this.state.sidebarVisible);
}

/**
 * Handle a click on the header navigation.
 *
 * @param {string} route - the navigation key for routing
 */
export function sidebarClick(/* string */ route) {
  console.log(`Sidebar - Routing time... user clicked: ${route}`);
}

/**
 * Handle a click on the header navigation.
 *
 * @param {string} route - the navigation key for routing
 */
export function footerClick(/* string */ route) {
  console.log(`Footer - Routing time... user clicked: ${route}`);
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //      user: 'guest',
      headerRoutes: props.routes.header,
      sidebarRoutes: props.routes.sidebar,
      footerRoutes: props.routes.footer,
      content: props.content,
      sidebarVisible: false,
    };
  }

  render() {
    const {
      headerRoutes, sidebarRoutes, footerRoutes, content, sidebarVisible,
    } = this.state;
    console.log(sidebarVisible ? 'Sidebar is Active' : 'Sidebar is Inactive');

    return (
      <StyledDashboard>
        <Sidebar routes={sidebarRoutes} onClick={sidebarClick} active={sidebarVisible} />
        <Header routes={headerRoutes} onClick={headerClick} />
        <Content content={content} active={sidebarVisible} />
        <Footer routes={footerRoutes} onClick={footerClick} />
      </StyledDashboard>
    );
  }
}
export default Dashboard;
