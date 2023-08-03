import mentor from "../assets/images/mentor.png";
import paperBot from "../assets/images/mentor.jpg";
import trinty from "../assets/images/trinty.png";
import python from "../assets/images/python.png";
import powerSmart from "../assets/images/powerSmart.jpg";
import portfolio from "../assets/images/logo.jpg";

const works = [
    {
        id: 1,
        title: "Mentor",
        subTitle: "Learning management System",
        status: "Completed",
        image: mentor,
        technologies: ["PHP", "HTML", "CSS", "JAVASCRIPT"],
        description: "Mentor is a comprehensive learning management system designed to support teachers and students in online learning environments. (This is the second year group project.)",
        link: "https://github.com/Group-project-mentor/mentor"
    },
    {
        id: 2,
        title: "Trinty Cam",
        subTitle: "Camera Store (web app)",
        status: "Completed",
        image: trinty,
        technologies: ["REACT", "EXPRESSJS", "SCSS", "MONGODB", "REDUX"],
        description: "This is our ( PIKBITS ) first MERN application for a camera store. Successfully deployed on year 2021.)",
        link: "https://www.trintycam.com"
    },
    {
        id: 3,
        title: "Paper Bot",
        subTitle: "Telegram bot",
        status: "Completed",
        image: paperBot,
        technologies: ["PYTHON", "PTB Library", "FIREBASE", "GOOGLE APP SCRIPT"],
        description: "This is a simple Telegram bot to do the task of giving marks and marking online paper pdfs easily. This bot can give specific students' marks, marked PDFs, and some analytics of their marks",
        link: "https://www.linkedin.com/posts/kavishka-sulakshana-12b571206_python-firebase-selflearning-activity-7091968285591699457-Vwl7?utm_source=share&utm_medium=member_desktop"
    },
    {
        id: 4,
        title: "PowerSmart",
        subTitle: "Power management system",
        status: "Developing",
        image: powerSmart,
        technologies: ["REACT", "REDUX", "EXPRESSJS", "WEBSOCKETS", "ARDUINO", "POSTGRESQL", "ML"],
        description: "This is our third year project (Image from FreePic.com)",
        link: ""
    },
    {
        id: 5,
        title: "Python simple projects",
        subTitle: "Simple python projects for personal use",
        status: "Developing",
        image: python,
        technologies: ["PYTHON"],
        description: "These are some simple python utils made by me for do my works easily.",
        link: "https://github.com/kavishka-sulakshana/Python-Utils"
    },
    {
        id: 6,
        title: "My Portfolio",
        subTitle: "My portfolio website",
        status: "Completed",
        image: portfolio,
        technologies: ["REACT", "TAILWINDCSS", "TYPESCRIPT", "FRAMER MOTION"],
        description: "The new portfolio website about me and my works. This is the website you are seeing now. [ 😁 click 'See Project'  to see a recursion]",
        link: "https://kavishka.netlify.app"
    },
];

export default works;