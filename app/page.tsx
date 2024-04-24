import Banner from "@/components/Banner";
import NavBar from "@/components/NavBar";


export default function Home() {
  return (
    <div>
<section>
  <NavBar/>
  <Banner/>
</section>
    <section className="h-screen text-slate-300 "><a href="" >HOME</a></section>
    <section className="h-screen text-slate-300">WHO WE ARE EXMEDIA</section>
    <section className="h-screen text-slate-300">WHAT WE DO</section>
    <section className="h-screen text-slate-300">GRAPHICS</section>
    <section className="h-screen text-slate-300">BRANDING</section>
    </div>
  )
}
