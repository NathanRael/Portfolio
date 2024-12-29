import {navItems} from "@/constants/navItems";
import Link from "next/link";

export default function Navbar() {

    return (
        <div className={'flex items-center justify-between w-full'}>
            <h1 className={'text-lead font-md text-white-100'}>
                R.Natanaël
            </h1>
           <ul className={'flex gap-10 items-center justify-end'}>
               {
                   navItems.map((navItem, i) => (
                        <li className={'text-base text-white-80 hover:text-white-100'} key={i}>
                            <Link href={navItem.link}  >{navItem.name}</Link>
                        </li>
                   ))
               }
           </ul>
        </div>
    )
}