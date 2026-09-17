import { cn } from '@/lib/utils'
import Image from 'next/image'

const Logo = ({ className, sizes = "120px" }: { className?: string; sizes?: string }) => {
    return (
        <div className={cn("rounded-full overflow-hidden size-[120px] flex items-center justify-center", className)}>
            <Image
                src="/logo/falx.png"
                alt="Logo"
                width={120}
                height={120}
                sizes={sizes}
            />
        </div>
    )
}

export default Logo