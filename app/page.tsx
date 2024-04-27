"use client";
import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import WhoWeAre from "@/components/WhoWeAre";
import Studio from "@/components/Studio";
import Graphics from "@/components/Graphics";
import Branding from "@/components/Branding";


export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
        <Banner />
      </section>

      <section>
        <WhoWeAre />
      </section>

      <section className=" text-slate-300">
        <Studio />
      </section>
      <section>
        <Graphics />
      </section>
      <section className=" text-slate-300">
        <Branding />
      </section>
     
    </div>
  );
}
