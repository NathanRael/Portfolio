import {Project} from "@/app/api/projects/route";
export const BASE_URL = "http://localhost:3000";

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
