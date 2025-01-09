import { ReactNode } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaAws, FaDatabase, FaGithub, FaGitSquare, FaLinux, FaReact } from "react-icons/fa";
import { GrDeploy, GrServerCluster } from "react-icons/gr";
import { IoIosGitBranch } from "react-icons/io";
import { LuWorkflow } from "react-icons/lu";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDocker, SiExpress, SiFirebase, SiGitlab, SiMongodb, SiMui, SiMysql, SiNestjs, SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiSpring } from "react-icons/si";


interface Tool {
    name: string;
    imageSrc: ReactNode;
}

interface Skill {
    name: string;
    icon: ReactNode;
    tools: Tool[];
}

const skills: Skill[] = [
    {
        name: "Frontend",
        icon: <CgWebsite />,
        tools: [
            { name: "React", imageSrc: <FaReact /> },
            { name: "TypeScript", imageSrc: <BiLogoTypescript /> },
            { name: "Next.js", imageSrc: <SiNextdotjs /> },
            { name: "Tailwind css", imageSrc: <RiTailwindCssFill /> },
            { name: "MUI", imageSrc: <SiMui /> }
        ]
    },
    {
        name: "Backend",
        icon: <GrServerCluster />,
        tools: [
            { name: "Spring-boot", imageSrc: <SiSpring /> },
            { name: "NestJs", imageSrc: <SiNestjs /> },
            { name: "Express", imageSrc: <SiExpress /> },
            { name: "PHP", imageSrc: <SiPhp /> },
            { name: "Python", imageSrc: <SiPython /> },
        ]
    },
    {
        name: "Database",
        icon: <FaDatabase />,
        tools: [
            { name: "PostgreSQL", imageSrc: <SiPostgresql /> },
            { name: "MongoDB", imageSrc: <SiMongodb /> },
            { name: "FireStore", imageSrc: <SiFirebase /> },
            { name: "MySql", imageSrc: <SiMysql /> },
        ]
    },
    {
        name: "DevOps",
        icon: <GrDeploy />,
        tools: [
            { name: "Docker", imageSrc: <SiDocker /> },
            { name: "AWS", imageSrc: <FaAws /> },
            { name: "CI / CD", imageSrc: <LuWorkflow /> },
            { name: "Linux", imageSrc: <FaLinux /> },
        ]
    },
    {
        name: "Source Control",
        icon: <IoIosGitBranch />,
        tools: [
            { name: "Git", imageSrc: <FaGitSquare /> },
            { name: "GitHub", imageSrc: <FaGithub /> },
            { name: "GitLab", imageSrc: <SiGitlab /> },
        ]
    }
];


export default skills;