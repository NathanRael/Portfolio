import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {RESUME_QUERY} from "@/sanity/lib/query";

export default async function Resume() {
    const {url : resumeUrl} = await client.fetch(RESUME_QUERY);
    
    return (
        <Link target={'_blank'} href={resumeUrl}>
            <Button size={'lg'} variant={'tertiary'}>
                Download resume
                <ExternalLink size={20}/>
            </Button>
        </Link>
    )   
}