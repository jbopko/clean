import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard/components/Dashboard';
// import * as serviceWorker from './serviceWorker';

const ApplicationRoutes = {
  header: [
    { title: 'Search...', route: '/search', active: 0 },
    { title: 'Process', route: '/process', active: 0 },
    { title: 'Product', route: '/product', active: 0 },
    { title: 'Blog', route: '/blog', active: 0 },
    { title: 'Account', route: '/account', active: 0 },
  ],
  sidebar: [
    {
      title: 'Services', route: '/services', index: 1, active: 0,
    },
    {
      title: 'Process', route: '/process', index: 2, active: 0,
    },
    {
      title: 'Technology', route: '/tech', index: 3, active: 0,
    },
    {
      title: 'Blog', route: '/blog', index: 4, active: 0,
    },
    {
      title: 'About', route: '/about', index: 5, active: 0,
    },
  ],
  footer: [
    {
      title: 'Jobs', route: '/jobs', index: 1, active: 0,
    },
    {
      title: 'Stuff', route: '/blog', index: 2, active: 0,
    },
    {
      title: 'Stuff', route: '/blog2', index: 3, active: 0,
    },
    {
      title: 'Stuff', route: '/blog3', index: 4, active: 0,
    },
    {
      title: 'About Us', route: '/about', index: 5, active: 0,
    },
  ],
};

const ApplicationContent = {
  header: {
    summary: 'We build fault-tolerant, scalable, reliable, secure web/mobile applications and APIs',
    routes: [],
    images: [],
  },
  topics: [
    {
      title: 'Mobile Apps', image: '', route: '', summary: 'Partner with our development team for your Next-Gen Mobile App', active: 0,
    },
    {
      title: 'Web Apps', image: '', route: '', summary: 'Veridition has the experience and expertise that you need.', active: 0,
    },
    {
      title: 'Project Management', image: '', route: '', summary: 'This is my summary', active: 0,
    },
    {
      title: 'API Development', image: '', route: '', summary: "We are uniquely qualified to create your custom software solution.  Let's build something together! </p><p>We are uniquely qualified to create your custom software solution.  Let's build something together!", active: 0,
    },
  ],
  posts: [
    { title: 'Do you have a project that VERIDITION can help with?', summary: 'Veridition has delivered Solutions in development and consulting across a variey of industries.', active: 0 },
    { title: 'MSA - Microservice Architecture', summary: 'This is my summary', active: 0 },
    { title: 'Cloud based Apps', summary: 'This is my summary', active: 0 },
    { title: 'Grid-based Dashboard with REACT and StyledComponents', summary: 'This is my summary', active: 0 },
  ],
};
ReactDOM.render(<Dashboard routes={ApplicationRoutes} content={ApplicationContent} />, document.getElementById('root'));
// serviceWorker.unregister();
