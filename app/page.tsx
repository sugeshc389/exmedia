import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";
import WhoWeAre from "@/components/WhoWeAre";

export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
        <Banner />
      </section>

      <section className="">
        <WhoWeAre />
      </section>
      <section className="h-screen text-slate-300">WHAT WE DO</section>
      <section className="h-screen text-slate-300">GRAPHICS</section>
      <section className="h-screen text-slate-300">BRANDING</section>
    </div>
  );
}
