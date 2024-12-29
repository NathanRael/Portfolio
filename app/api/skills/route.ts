import {NextRequest} from "next/server";
import {skills} from "@/constants";

export interface Skill {
    name: string;
    image : string
}

export async function GET(req : NextRequest) {
    
    return Response.json(skills)
    
}