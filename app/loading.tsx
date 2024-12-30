import {Loader, LoaderCircle} from "lucide-react";

export default function Loading(){
    return (
        <div className="animate-spin absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoaderCircle className={'text-white-100 '}/>
        </div>
    )
}