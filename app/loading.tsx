import {Loader, LoaderCircle} from "lucide-react";

export default function Loading(){
    return (
        <div className="flex-col-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <LoaderCircle className={'text-white-100 animate-spin '}/>
            <p className={"text-white-100 animate-pulse text-small"}>Loading ...</p>
        </div>
    )
}