import { cn } from '@/lib/utils'
import Image from 'next/image'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("rounded-xl overflow-hidden size-[120px] flex items-center justify-center", className)}>
            <Image
                src="/logo/falx.png"
                alt="Logo"
                width={120}
                height={120}
            />
        </div>
    )
}

export default Logo