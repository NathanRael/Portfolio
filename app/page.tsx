

import {Button} from "@/components/ui/button";
import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/sections/Hero";

export default function Home() {
  return (
      <section className="p-6 flex gap-[128px]  flex-col items-center justify-center w-full">
          <Navbar/>
          <HeroSection/>
      </section>
  );
}
