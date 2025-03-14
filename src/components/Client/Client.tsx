import { testimonials } from "../../../data";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import Marquee from "react-fast-marquee";

import reactIcon from "../../../public/imgs/re.svg";
import jsIcon from "../../../public/imgs/js-official-svgrepo-com.svg";
import jqueryIcon from "../../../public/imgs/jquery-svgrepo-com.svg";
import htmlIcon from "../../../public/imgs/html-5-svgrepo-com.svg";
import cssIcon from "../../../public/imgs/css-3-svgrepo-com.svg";
import bootIcon from "../../../public/imgs/bootstrap-svgrepo-com.svg";
import tailIcon from "../../../public/imgs/tail.svg";
import tsIcon from "../../../public/imgs/ts.svg";
import nxIcon from "../../../public/imgs/next.svg";
import sassIcon from "../../../public/imgs/sass-svgrepo-com.svg";
import Image from "next/image";

export default function Client() {
  return (
    <section id="testimonials" className="">
    <h1 className="lg:text-4xl md:text-2xl text-[18px] sm:text-xs font-bold text-center">
        A Kinde Words From{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text lg:text-4xl md:text-2xl text-[18px] sm:text-xs  font-extrabold text-transparent">
          Satisfied Clients
        </span>
      </h1>
      <div className="flex flex-col max-lg:mt-10 items-center">
        <div className="h-[50vh] md:h-[30rem] max-w-[80vw] rounded-md flex flex-col justify-center items-center antialiased relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

<div className="flex items-center mt-5 justify-around overflow-x-hidden ">

      <Marquee  >
        <Image
          src={nxIcon}
          alt="REACT icon"
          
        className="pe-5"
          height={88}
          width={88}
        />

        <Image
          src={reactIcon}
          alt="REACT icon"
          className="pe-5"
          height={85}
          width={85}

        />
        <Image
          src={tailIcon}
          alt="REACT icon"
          
          height={85}
          width={85}
        />
        <Image
          src={tsIcon}
          alt="REACT icon"
           
          className="px-5"
          height={100}
          width={100}
        />
        <Image
          src={jsIcon}
          alt="REACT icon"
        
          
          height={69}
          width={69}

        />
        <Image
          src={jqueryIcon}
          alt="REACT icon"
          height={130}
          width={130}
 className="px-5"
        />
        <Image
          src={cssIcon}
          alt="REACT icon"
       
          
          height={65}
          width={65}
        />
        <Image
          src={sassIcon}
          alt="REACT icon"
       
          
          height={65}
          width={65}
        />
        <Image
          src={htmlIcon}
          alt="REACT icon"
          className="px-5"
          height={100}
          width={100}
        />
        <Image
          src={bootIcon}
          alt="REACT icon"
          
        
          height={65}
          width={65}
        />

      </Marquee>
</div>

    </section>
  );
}
