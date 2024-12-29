import Link from "next/link";
import {MY_GITHUB_PROFILE} from "@/constants";

export default function  Footer() {
    return (
        <div>
            <Link href={MY_GITHUB_PROFILE} className={'text-small text-white-80 underline'}>© Natanaël  RALAIVOAVY</Link>
        </div>
    )
}