import mentor from "../assets/images/mentor.png";
import paperBot from "../assets/images/mentor.jpg";
import trinty from "../assets/images/trinty.png";
import python from "../assets/images/python.png";
import powerSmart from "../assets/images/powerSmart.jpg";
import portfolio from "../assets/images/logo.jpg";

const works = [
    {
        id: 1,
        title: "Paper Class System",
        subTitle: "Telegram bot + Admin panel",
        status: "Completed",
        image: paperBot,
        technologies: ["PYTHON", "PTB Library", "FIREBASE", "EXPRESS", "MONGODB", "REACT", "TYPESCRIPT"],
        description: "This Telegram bot serves as a comprehensive academic management tool, designed to streamline the process of grading, summarizing marks, applying re-corrections, and distributing educational materials like online papers. Deployed for a tuition class with over 900 students.",
        link: "https://youtu.be/HInYbasRiiw"
    },
    {
        id: 2,
        title: "PowerSmart",
        subTitle: "Power management system",
        status: "Completed",
        image: powerSmart,
        technologies: ["REACT", "REDUX", "EXPRESS", "WEBSOCKETS", "ARDUINO", "POSTGRESQL", "ML"],
        description: "This is our third year project (Image from FreePic.com)",
        link: "https://github.com/orgs/Power-Smart/repositories"
    },
    {
        id: 3,
        title: "Mentor",
        subTitle: "Learning management System",
        status: "Completed",
        image: mentor,
        technologies: ["PHP", "HTML", "CSS", "JAVASCRIPT"],
        description: "Mentor is a comprehensive learning management system designed to support teachers and students in online learning environments. (This is the second year group project.)",
        link: "https://github.com/Group-project-mentor/mentor"
    },
    {
        id: 4,
        title: "Trinty Cam",
        subTitle: "Camera Store (web app)",
        status: "Completed",
        image: trinty,
        technologies: ["REACT", "EXPRESS", "SCSS", "MONGODB", "REDUX"],
        description: "This is our ( PIKBITS ) first MERN application for a camera store. Successfully deployed on year 2021.)",
        link: "https://www.trintycam.com"
    },
    {
        id: 5,
        title: "My Portfolio",
        subTitle: "My portfolio website",
        status: "Completed",
        image: portfolio,
        technologies: ["REACT", "TAILWINDCSS", "TYPESCRIPT", "FRAMER MOTION"],
        description: "The new portfolio website about me and my works. This is the website you are seeing now. [ 😁 click 'See Project'  to see a recursion]",
        link: "https://kavishka.netlify.app"
    },
    {
        id: 6,
        title: "Python simple projects",
        subTitle: "Simple python projects for personal use",
        status: "Developing",
        image: python,
        technologies: ["PYTHON"],
        description: "These are some simple python utils made by me for do my works easily.",
        link: "https://github.com/kavishka-sulakshana/Python-Utils"
    },
];

export default works;
