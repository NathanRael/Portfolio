import {Project} from "@/app/api/projects/route";
import {Skill} from "@/app/api/skills/route";
export const BASE_URL = "http://localhost:3000";

export const MY_EMAIL = "ralaivoavy.natanael@gmail.com"
export const MY_LINKEDIN_PROFILE = "https://www.linkedin.com/in/natana%C3%ABl-ralaivoavy-694447283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
export const MY_GITHUB_PROFILE = "https://www.github.com/NathanRael"
export const MY_FACEBOOK_PROFILE = "https://www.facebook.com/profile.php?id=100087957505977"

export const projects :Project[] = [
    {
        id: 'project-1',
        name: 'Rael UI',
        description: 'An UI library with built-in form management for React.',
        image: 'https://via.placeholder.com/300x200.png?text=Rael+UI',
        links: ['https://rael-ui-docs.vercel.app', 'https://www.npmjs.com/package/rael-ui'],
        type: {
            display : '\'UI library\'',
            name : 'application'
        },
        techStacks: ['React', 'TypeScript', 'Storybook', 'TailwindCSS']
    },
    {
        id: 'project-2',
        name: 'Apollo Chatbot',
        description: 'A locally hosted AI chatbot powered by Llama for private conversations.',
        image: 'https://via.placeholder.com/300x200.png?text=Apollo+Chatbot',
        links: ['https://apollo-ai-docs.vercel.app'],
        type: {
            display :'AI Application',
            name : 'application'
        },
        techStacks: ['Python', 'FastAPI', 'React', 'SQLAlchemy', 'TailwindCSS']
    },
    {
        id: 'project-3',
        name: 'CodeSnip Manager',
        description: 'A web app to organize and manage your code snippets efficiently.',
        image: 'https://via.placeholder.com/300x200.png?text=CodeSnip+Manager',
        links: ['https://codesnip-manager.vercel.app', 'https://github.com/codesnip-manager'],
        type: {
            display :'Web Application',
            name : 'application'
        },
        techStacks: ['React', 'TypeScript', 'Next.js', 'Prisma', 'PostgreSQL']
    },
    {
        id: 'project-4',
        name: 'Portfolio Builder Pro',
        description: 'A drag-and-drop portfolio builder for developers and designers.',
        image: 'https://via.placeholder.com/300x200.png?text=Portfolio+Builder+Pro',
        links: ['https://portfoliobuilderpro.vercel.app', 'https://www.npmjs.com/package/portfolio-builder-pro'],
        type: {
            display :'Web tool',
            name : 'application'
        },
        techStacks: ['React', 'TypeScript', 'Zustand', 'TailwindCSS', 'Framer Motion']
    },
    {
        id: 'project-5',
        name: 'Mobile mockup',
        description: 'A pixel art editor with collaboration features.',
        image: 'https://via.placeholder.com/300x200.png?text=PixelCraft',
        links: ['https://pixelcraft.app', 'https://github.com/pixelcraft-app'],
        type: {
            display :'Mobile mockup',
            name : 'mockup'
        },
        techStacks: ['Electron', 'React', 'TypeScript', 'Redux', 'ChakraUI']
    },
    {
        id: 'project-6',
        name: 'TradeAI Insights',
        description: 'An AI-driven dashboard for trading insights and analytics.',
        image: 'https://via.placeholder.com/300x200.png?text=TradeAI+Insights',
        links: ['https://tradeai-insights.com', 'https://github.com/tradeai-insights'],
        type: {
            display :'Mobile app',
            name : 'application'
        },
        techStacks: ['React', 'Next.js', 'TailwindCSS', 'Node.js', 'PostgreSQL']
    }
];


export const skills : Skill[] = [
    {
        name : 'Next js',
        image : 'next-js',
    },
    {
        name : 'React',
        image : 'react'
    },
    {
        name : 'Figma',
        image : 'figma'
    },
    {
        name : 'Python',
        image : 'python',
    },
    {
        name : 'Storybook',
        image : 'storybook'
    },
    {
        name : 'TailwindCss',
        image : 'tailwind'
    },
    {
        name : 'Typescript',
        image : 'typescript'
    } ,
    {
        name : 'Javascript',
        image : 'javascript'
    },
    {
        name : 'Fastapi',
        image : 'fastapi'
    },
    {
        name : 'Git',
        image : 'git'
    },
    {
        name : 'Node js',
        image : 'node-js'
    }
]