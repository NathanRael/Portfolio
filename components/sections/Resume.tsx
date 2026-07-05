import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import Link from "next/link";
import {RESUME_QUERY} from "@/sanity/lib/query";
import {sanityFetch} from "@/sanity/lib/live";

export default async function Resume() {
    const { data: resumeData } = await sanityFetch({ query: RESUME_QUERY });
    const { cvFrUrl, cvEnUrl } = resumeData;

    return (
        <Button asChild size={'lg'} variant={'tertiary'}>
            <Link target={'_blank'} rel="noopener noreferrer" href={cvEnUrl}>
                Download resume
                <ExternalLink size={20}/>
            </Link>
        </Button>
    )
}
