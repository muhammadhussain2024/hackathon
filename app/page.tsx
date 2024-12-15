

import DontMiss from "@/app/components/DONTMISS";
import Essential from "@/app/components/ESSENTIAL";
import Featured from "@/app/components/FEATURED";
import GearUp from "@/app/components/GEARUP";
import Hero from "@/app/components/HERO";
import Navigation from "@/app/components/Navigation";
import { CarouselSize } from "@/app/components/BEST";


export default function Home() {
  return (
  <main>
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}