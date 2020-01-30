This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
# clean


// constructor(props) {
//     super(props);
//     this.state = {
//         links: [
//             {
//                 title: "Init",
//                 url: "Inited"
//             }
//         ]
//     };
// }


/**
 * Representation of a single navigation element for the app
 * 
 * @param {*} props 
 */
// function NavigationElement(props) {
//     return (
//         <Button className="square" onClick={props.onClick}>
//             {props.value}
//         </Button>
//     );
// }
// <NavigationElement
//     value={item.title}
//     onClick={i => this.handleClick(item.route)} />


/* Non-mobile styles, 750px breakpoint */

/* Medium screens breakpoint (1050px) */



class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: props.links
        };
    }
    render() {
        var routes = this.state.routes;
        if (Array.isArray(routes) || 1)
            return (
                <StyledFooter>
                    <div>Blah blah blah</div>
                    {
                        routes.map(item => (
                            <Button key={item.route} onClick={i => this.props.onClick(item.route)}>
                                {item.title}
                            </Button>
                        ))
                    }
                    <div>&copy; 2019 Veridition</div>
                </StyledFooter>);
        else
            return (<StyledFooter />);
    }
}
export default Footer;
    return (
            <aside className="sidenav">
                <div className="sidenav__close-icon">
                    <i className="fas fa-times sidenav__brand-close"></i>
                </div>
                    <li className="sidenav__list-item">Item Two</li>
                    <li className="sidenav__list-item">Item Three</li>
                    <li className="sidenav__list-item">Item Four</li>
                    <li className="sidenav__list-item">Item Five</li>
                </ul>
            </aside>
        );




    background-size: 50%, 50%;
    background-position: 0 0, 98px 0;
    background-origin: padding-box, padding-box;



/* <StyledDashboard className={this.state.sidebarVisible ? "full" : "compact"}>
    {currentState ? <Sidebar routes={this.state.sidebarRoutes} onClick={this.sidebarClick} active={this.state.sidebarVisible} /> : null}
    <Header routes={this.state.headerRoutes} onClick={this.headerClick} />
    <Content content={this.state.content} />
    <Footer routes={this.state.footerRoutes} onClick={this.footerClick} />
</StyledDashboard> */
// @media only screen and (min-width: 640px) {
//     grid-template-columns: 200px 1fr;
//     grid-template-areas:
//       "sidenav header"
//       "sidenav content"
//       "footer footer";
// }
// @media only screen and (min-width: 1024px) {
//   /* Break out content cards into two columns */
//   .content - cards {
//     column - count: 2;
// }
// }
//  .inactive.compact{
//     transform: translateX(-205px);
//     transition: all .5s ease -in -out;
//     grid - template - columns: 1fr;
//     grid - template - rows: 50px 1fr 50px;
//     grid - template - areas:
//     'header'
//     'content'
//     'footer';
// }
// .active.full{
//     transform: translateX(0);
//     transition: all .5s ease -in -out;
//     grid - template - columns: 200px 1fr;
//     grid - template - rows: 50px 1fr 50px;
//     grid - template - areas:
//     "sidenav header"
//     "sidenav content"
//     "footer footer";
// }

  --grad-top: linear-gradient(to bottom, var(--color-light) 5%, var(--color-dark) 66%);
  --grad-top-left: linear-gradient(to top left, var(--color-dark), var(--color-dark), var(--color-dark), var(--color-light));
  --grad-top-right: linear-gradient(to top right, var(--color-dark), var(--color-dark), var(--color-dark), var(--color-light));
  --grad-bottom: linear-gradient(to top, var(--color-light) 5%, var(--color-dark) 50%);
  --grad-bottom-left: linear-gradient(to bottom left, var(--color-dark), var(--color-dark), var(--color-dark), var(--color-light));
  --grad-bottom-right: linear-gradient(to bottom right, var(--color-dark), var(--color-dark), var(--color-dark), var(--color-light));
  --grad-left: radial-gradient(farthest-side at 0%, var(--color-light) 50%, var(--color-dark) 90%);
  --grad-right: radial-gradient(farthest-side at 100%, var(--color-light) 50%, var(--color-dark) 90%);
  --grad-center: radial-gradient(var(--color-light) 0, var(--color-dark) 67%);
  --grad-center-stripe: linear-gradient(var(--color-dark), var(--color-light), var(--color-dark));
  --grad-card: linear-gradient(60deg, var(--color-light) 20%, var(--color-transparent) 30%, var(--color-transparent) 65%, var(--color-light) 75%),
      linear-gradient(-240deg, var(--color-transparent) 60%, var(--color-dark) 85%);
  --grad-paper: linear-gradient(60deg, var(--colorgray-light) 12%, var(--color-darkgray) 20%, var(--colorgray-light) 50%);
  --grad-card-light: linear-gradient(var(--color-dark) 1%, var(--color-light) 15%, var(--color-light) 85%, var(--color-dark) 99%);
  --grad-card-dark: linear-gradient(var(--color-light) 1%, var(--color-dark) 15%, var(--color-dark) 85%, var(--color-light) 99%);
  --grad-card-light-alt: linear-gradient(var(--color-light) 1%, var(--color-dark) 5%, var(--color-light) 15%, var(--color-light) 85%, var(--color-dark) 95%, var(--color-light) 99%);
  --grad-card-dark-alt: linear-gradient(var(--color-dark) 1%, var(--color-light) 5%, var(--color-dark) 15%, var(--color-light) 85%, var(--color-dark) 95%);
  
  --grad-vline-left: radial-gradient(closest-side at 10%, var(--color-light) 10%, var(--color-dark) 90%);
  --grad-vline-right: radial-gradient(closest-side at 90%, var(--color-light) 10%, var(--color-dark) 90%);

  --grad-carbon-fiber:
    radial-gradient(var(--color-light) 15%, var(--color-transparent) 20%) 0 0,
    radial-gradient(var(--color-light) 15%, var(--color-transparent) 20%) 8px 8px,
    radial-gradient(var(--color-transparent) 15%, var(--color-transparent) 20%) 0 1px,
    radial-gradient(var(--color-transparent) 15%, var(--color-transparent) 20%) 7px 8px;

  --grad-carbon-fiber-light:
    radial-gradient(var(--color-dark) 15%, var(--color-transparent) 20%) 0 0,
    radial-gradient(var(--color-dark) 15%, var(--color-transparent) 20%) 8px 8px,
    radial-gradient(var(--color-transparent) 15%, var(--color-transparent) 20%) 0 1px,
    radial-gradient(var(--color-transparent) 15%, var(--color-transparent) 20%) 7px 8px;

  --grad-content: linear-gradient(to bottom right, var(--color-dark) 2%, var(--color-light) 40%, var(--color-dark) 45%, var(--color-dark) 50%, var(--color-light) 65%, var(--color-dark) 90%) no-repeat border-box;
  --grad-light-gloss: linear-gradient(to bottom, var(--color-2nd-light) 0%, var(--color-light) 50%,var(--color-2nd-light) 100%);
  --grad-dark-gloss: linear-gradient( var(--color-dark), var(--color-2nd-dark), var(--color-dark));
  --grad-clear-light: linear-gradient(-90deg, var(--color-transparent), var(--color-light)) no-repeat border-box;
  --grad-clear-dark: linear-gradient(var(--color-transparent), var(--color-dark)) no-repeat border-box;
  --grad-glass: linear-gradient(var(--color-highlight) 0%, var(--color-darkgray) 10%, var(--color-highlight), var(--color-darkgray), var(--color-highlight), var(--color-darkgray) 90%, var(--color-highlight) 100% );
  --grad-highlight-white: linear-gradient(var(--color-highlight) 0%, var(--color-darkgray) 10%, var(--colorgray-light) 33%, var(--color-darkgray) 67%, var(--color-darkgray) 90%, var(--color-highlight) 100% );
  --grad-glass-with-accent: 
  --grad: radial-gradient(farthest-side at 10% 50%, var(--color-light), var(--color-dark));
