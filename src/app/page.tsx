import About from "@/components/About/About";
import Approch from "@/components/Approch/Approch";
import Client from "@/components/Client/Client";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import WorkExp from "@/components/WorkExp/WorkExp";



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-5 sm:px-10 mx-auto relative">
      <div className="max-w-7xl h-screen w-full">
        <Hero />
      </div>

      <div className="py-20">
        <About />
      </div>
      <div className="py-20">
        <Projects />
      </div>
      <div className="py-20">
        <Client />
      </div>
      <div className="py-20">
        <WorkExp />
      </div>
      <div className="py-20 ">
        <Approch />
      </div>
      {/* <div className="py-20 "> */}
        <Footer />
      {/* </div> */}

    </main>
  );
}
