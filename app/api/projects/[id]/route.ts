import {projects} from "@/constants";

export async function GET(
    request : Request,
    {params} : { params : Promise<{ id: string }> }
) {
    const id = (await params).id
    
    return Response.json(projects.find((project) => project.id === id))
}