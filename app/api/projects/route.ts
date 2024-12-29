import {projects} from "@/constants";
import {NextRequest} from "next/server";

export interface Project {
    id: string;
    name: string;
    description: string;
    image: string;
    links: string[];
    type: {
        name: 'application' | 'mockup';
        display: string;
    };
    techStacks: string[];
}


export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const filter = searchParams?.get('filter');

    
    if (!filter || filter === 'undefined' || filter?.toLowerCase() === 'all') return Response.json(projects);
    
    
    
    const filteredProjects: Project[] = projects.filter(project => project.type.name.toLowerCase() === filter.toLowerCase());
    return Response.json(filteredProjects);
}

