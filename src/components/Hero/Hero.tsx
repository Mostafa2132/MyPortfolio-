import { Spotlight } from "../ui/spotlight-new";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicBtn from "../ui/MagicBtn";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { FaDownload } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight />
      </div>
      <div className=" h-screen w-full dark:bg-black bg-white absolute top-0 left-0 right-0 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[length:64px_64px] bg-repeat bg-black-100 dark:hidden "
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='black' stroke-width='0.5'%3E%3Cpath d='M0 0H64V64H0Z'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div
          className="absolute inset-0 bg-[length:64px_64px] bg-repeat hidden dark:bg-black/50  dark:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='64' height='64' fill='none' stroke='gray' stroke-width='0.09'%3E%3Cpath d='M0 0H64V64H0Z'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10 flex-col">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center mx-auto">
          <h2 className="uppercase tracking-widest text-xs text-center mb-5 text-blue-100 max-w-80">
            Dynmic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            words="Transform Concepts into Seamless User Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl "
          />

          <div className="text-center text-sm my-4 md:text-lg lg:text-2xl md:tracking-wider">
            <TypewriterEffect
              words={[
                { text: "Hi, I'm " },
                { text: "Mostafa ", className: "text-purple-600" },
                { text: "Ebrahem ", className: "text-purple-600" },
                { text: "Front-end " },
                { text: "Developer " },
              ]}
              cursorClassName="text-purple-600"
            />
          </div>
          <Link target="_blank" href="https://drive.google.com/file/d/19I1liMf8L0KK76cDxlDKoSqD77re7esx/view?usp=sharing">
            <MagicBtn
              title="Download CV"
              postion="right"
              icon={<FaDownload />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
