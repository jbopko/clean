import React from "react"
import ReactDOM from "react-dom"
import Dashboard from "../components/Dashboard";

const ApplicationRoutes =
{
    "header": [
        { title: "Search...", route: "/", active: 0 },
        { title: "", route: "/process", active: 0 },
        { title: "", route: "/product", active: 0 },
        { title: "", route: "/blog", active: 0 },
        { title: "Account", route: "/contact", active: 0 }
    ],
    "sidebar": [
        { title: "Services", route: 1, active: 0 },
        { title: "Process", route: 2, active: 0 },
        { title: "Technology", route: 3, active: 0 },
        { title: "Blog", route: 4, active: 0 },
        { title: "About", route: 5, active: 0 }
    ],
    "footer": [
        { title: "Jobs", route: "/jobs" },
        { title: "Stuff", route: "/blog" },
        { title: "Stuff", route: "/blog2" },
        { title: "Stuff", route: "/blog3" },
        { title: "About Us", route: "/about" }
    ]
};

const ApplicationContent =
{
    "header": {
        "summary": "We build fault-tolerant, scalable, reliable, secure web/mobile applications and APIs",
        "routes": [],
        "images": []
    },
    "topics": [
        { title: "Mobile Apps", image: "", route: "", summary: "Partner with our development team for your Next-Gen Mobile App", active: 0 },
        { title: "Web Apps", image: "", route: "", summary: "Veridition has the experience and expertise that you need.", active: 0 },
        { title: "Project Management", image: "", route: "", summary: "This is my summary", active: 0 },
        { title: "API Development", image: "", route: "", summary: "We are uniquely qualified to create your custom software solution.  Let's build something together! </p><p>We are uniquely qualified to create your custom software solution.  Let's build something together!", active: 0 }
    ],
    "posts": [
        { title: "Do you have a project that VERIDITION can help with?", summary: "Veridition has delivered Solutions in development and consulting across a variey of industries.", active: 0 },
        { title: "MSA - Microservice Architecture", summary: "This is my summary", active: 0 },
        { title: "Cloud based Apps", summary: "This is my summary", active: 0 },
        { title: "Grid-based Dashboard with REACT and StyledComponents", summary: "This is my summary", active: 0 }
    ]
};

it('renders dashboard without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard routes={ApplicationRoutes} content={ApplicationContent} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test ('fizzbuzz', () => {
    var N = 100;
    var anArray = [...Array(N)].map(x => Math.floor(Math.random() * N) + 1);

    anArray.forEach(function (value, index) {
        var msg = value;
        if (value % 3 === 0) {
            msg += " (Fizz)";
        }
        if (value % 5 === 0) {
            msg += " (Buzz)";
        }
        console.log("[" + index + "]: " + msg);
    })
});
