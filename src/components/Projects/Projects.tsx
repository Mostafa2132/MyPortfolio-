import Image from "next/image";

import bgimg from "../../../public/imgs/bg.png";
import pro1 from "../../../public/imgs/project1.png";
import pro2 from "../../../public/imgs/project2.png";
import pro3 from "../../../public/imgs/project3.png";
import pro4 from "../../../public/imgs/project4.png";
import reactIcon from "../../../public/imgs/re.svg";
import arrIcon from "../../../public/imgs/arrow.svg";
import tailIcon from "../../../public/imgs/tail.svg";
import jsIcon from "../../../public/imgs/js-official-svgrepo-com.svg";
import jqueryIcon from "../../../public/imgs/jquery-svgrepo-com.svg";
import bootIcon from "../../../public/imgs/bootstrap-svgrepo-com.svg";
import axiosIcon from "../../../public/imgs/axios-ar21.svg";
import formikIcon from "../../../public/imgs/formik.svg";

// import gridimg from "../../../public/imgs/grid.svg";
import { PinContainer } from "../ui/3d-pin";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className={`w-full h-full`}>
      <h1 className="lg:text-4xl md:text-2xl text-[18px] sm:text-xs font-bold text-center">
        A Small Selection of{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text lg:text-4xl md:text-2xl text-[18px] sm:text-xs  font-extrabold text-transparent">
          My Projects
        </span>
      </h1>

      <div className="flex items-center justify-center p-4 flex-wrap gap-x-24  ">

        <div className="  lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem]   items-center justify-center flex  sm:w-[570px]   w-[80vw]">
          <PinContainer title={"Project1"} href={""}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <Image src={pro1} alt={"title"} width={500} height={500} />
              </div>

              <Image
                src={bgimg}
                alt="bg"
                width={500}
                height={500}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold mt-4 text-purple-600 lg:text-2xl md:text-xl text-base  line-clamp-1">
             🛒 Fresh Cart - A Complete E-Commerce Platform
            </h1>
            <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
             Fresh Cart is a modern and fully functional e-commerce platform designed to provide a smooth and efficient shopping experience. Built with React.js and optimized with the latest technologies, it ensures high performance, fast loading times, and a seamless UI.
            </p>
            <div className="flex items-center mt-7 mb-3 justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={reactIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={axiosIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={formikIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={tailIcon}
                    className="w-full hf "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base hover:text-purple-900  text-purple-600">
                <Link target="_blank" href="https://my-eco-ybxz-fu739dk1g-mostafas-projects-c1a570c4.vercel.app/login">Show website</Link>
                <Image src={arrIcon} alt={"title"} width={10} height={10} />
              </div>
            </div>
          </PinContainer>
        </div>

        <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
          <PinContainer title={"Project2"} href={""}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <Image src={pro2} alt={"title"} width={500} height={500} />
              </div>

              <Image
                src={bgimg}
                alt="bg"
                width={500}
                height={500}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold mt-4 lg:text-2xl text-purple-600 md:text-xl text-base  line-clamp-1">
             🚀 Simone&apos;s Website – A Stunning, Fully Responsive Web Experience! 🎨💻

            </h1>
            <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
             
Simon&apos;s Website is a modern, sleek, and fully responsive website designed to provide a seamless user experience across all devices. This project showcases a perfect blend of aesthetics and functionality, built using the latest front-end technologies to ensure smooth interactions, fast performance, and eye-catching animations
            </p>
            <div className="flex items-center mt-7 mb-3 justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={jsIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={jqueryIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={bootIcon}
                    className="w-full "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                <Link href="https://simonemostafa.vercel.app/">Show website</Link>
                <Image src={arrIcon} alt={"title"} width={10} height={10} />
              </div>
            </div>
          </PinContainer>
        </div>


        <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] flex  items-center justify-center sm:w-[570px]   w-[80vw]">
          <PinContainer title={"Project3"} href={""}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <Image src={pro3} alt={"title"} width={500} height={500} />
              </div>

              <Image
                src={bgimg}
                alt="bg"
                width={500}
                height={500}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold mt-4 lg:text-2xl text-purple-600 md:text-xl text-base  line-clamp-1">
               Stepping Into React Development
            </h1>
            <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
              This project represents the start of my journey into building modern, interactive web applications. Learning how to integrate tools like Tailwind for styling and Formik with Yup for form handling has been an eye-opener. React's flexibility and efficiency have truly amazed me, and I’m eager to tackle more complex challenges ahead.
            </p>
            <div className="flex items-center mt-7 mb-3 justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={reactIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={formikIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={tailIcon}
                    className="w-full hf "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                <Link href="https://hello-react-iota-eight.vercel.app/">Show website</Link>
                <Image src={arrIcon} alt={"title"} width={10} height={10} />
              </div>
            </div>
          </PinContainer>
        </div>


        <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
          <PinContainer title={"Project4"} href={""}>
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
              <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                <Image src={pro4} alt={"title"} width={500} height={500} />
              </div>

              <Image
                src={bgimg}
                alt="bg"
                width={500}
                height={500}
                className="z-10 absolute bottom-0"
              />
            </div>
            <h1 className="font-bold lg:text-2xl text-purple-600 md:text-xl text-base  line-clamp-1">
              Family Bakery
            </h1>
            <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
             I’ve been working on a website for Family Bakery, a charming, family-owned bakery that specializes in homemade pastries, cakes, and breads. 🍞🍰
            </p>
            <div className="flex items-center mt-7 mb-3 justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={jsIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>

                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={jqueryIcon}
                    className=" w-full  "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="size-10 p-2 border border-white/[.2] flex items-center justify-center rounded-full">
                  <Image
                    src={tailIcon}
                    className="w-full hf "
                    alt={"title"}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                <Link href="https://mostafa2132.github.io/Family-Bakery/">Show website</Link>
                <Image src={arrIcon} alt={"title"} width={10} height={10} />
              </div>
            </div>
          </PinContainer>
        </div>

        <Link
          href={"/allprojects"}
          className="p-[3px] mt-12 cursor-pointer animate-bounce relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px] flex items-center gap-2  relative group transition duration-200 text-white hover:bg-transparent">
            show more projects{" "}
            <Image src={arrIcon} alt={"title"} width={10} height={10} />
          </div>
        </Link>
      </div>
    </section>
  );
}
