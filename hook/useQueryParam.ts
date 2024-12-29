import {useSearchParams, useRouter} from "next/navigation";

export function useQueryParam() {
    const searchParams = useSearchParams();
    const router  = useRouter();
    
    const setQueryParam = (key : string, value : string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set(key, value);
        router.push(`?${currentParams.toString()}`);
    }

    const removeQueryParam = (key: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.delete(key);
        router.push(`?${currentParams.toString()}`);
    };
    
    
    return {
        setQueryParam,
        removeQueryParam,
    }
}