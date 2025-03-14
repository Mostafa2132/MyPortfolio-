import Image from "next/image";
import Link from "next/link";

import bgimg from "../../../public/imgs/bg.png";
import pro5 from "../../../public/imgs/project5.png";
import pro6 from "../../../public/imgs/project6.png";
import pro7 from "../../../public/imgs/project7.png";
import pro8 from "../../../public/imgs/project8.png";
import pro9 from "../../../public/imgs/project9.png";
import pro10 from "../../../public/imgs/project10.png";
import pro11 from "../../../public/imgs/project11.png";
import pro12 from "../../../public/imgs/project12.png";
import arrIcon from "../../../public/imgs/arrow.svg";
import tailIcon from "../../../public/imgs/tail.svg";
import jsIcon from "../../../public/imgs/js-official-svgrepo-com.svg";
import jqueryIcon from "../../../public/imgs/jquery-svgrepo-com.svg";
import bootIcon from "../../../public/imgs/bootstrap-svgrepo-com.svg";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundLines } from "@/components/ui/background-lines";

export default function allProjects() {
  return (
    <section>


  
    <BackgroundLines className="flex items-center h-screen  justify-center w-full flex-col px-4">
      <div className="w-full h-full py-12">

        <h1 className="lg:text-4xl md:text-2xl text-[18px] sm:text-xs font-bold text-center">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text lg:text-4xl md:text-2xl text-[18px] sm:text-xs  font-extrabold text-transparent">
            All Projects
          </span>
        </h1>

        <div className="flex items-center justify-center p-4 flex-wrap gap-x-24  ">

          <div className="  lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem]   items-center justify-center flex  sm:w-[570px]   w-[80vw]">
            <PinContainer title={"Project5"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro5} alt={"title"} width={500} height={500} />
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
                 Yummy—a powerful recipe discovery app built using HTML, CSS, JavaScript, jQuery, and Bootstrap! 🍽️
              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
             This app showcases smooth API integration, responsive design, and user-friendly navigation. Using jQuery enhances the dynamic features and improves performance, making it a breeze to find delicious recipes on the go.
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
                      className=" w-full  "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base hover:text-purple-900  text-purple-600">
                  <Link target="_blank" href="https://yummy-snowy-nu.vercel.app/index.html">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>


   <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project6"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro12} alt={"title"} width={500} height={500} />
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
               
Game Reviews


              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">

project made by html and css and js and bootstrap5 and jQuery             </p>
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
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://game-reviews-tau.vercel.app/index.html">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>

         

          <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] flex  items-center justify-center sm:w-[570px]   w-[80vw]">
            <PinContainer title={"Project7"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro7} alt={"title"} width={500} height={500} />
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
                small e-commerce platform
              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
          
Over the past few weeks, I have been dedicated to developing a user-friendly online store using HTML, CSS, JavaScript, Bootstrap, and integrating various APIs to enhance functionality. This project was a labor of love, focused on not only achieving a clean and efficient codebase but also providing an exceptional user experience
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
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://mostafa2132.github.io/small-e-commerc/?/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>

          <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project8"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro8} alt={"title"} width={500} height={500} />
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
               
 A Weather App! 🌦️


              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
             For this project, I focused on building a responsive and user-friendly weather application using HTML, CSS, JavaScript, and Bootstrap. Here’s a deeper dive into what I 
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
                      src={bootIcon}
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://mostafa2132.github.io/Weather-App/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>


          <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project9"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro9} alt={"title"} width={500} height={500} />
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
               
Book Marker


              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">

Introducing Bookmarker, a web application I developed during my course to save and manage your favorite web links. With Bookmarker, you can easily add, remove, visit, and search through your saved links, all from a clean and user-friendly interface.
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
                      src={bootIcon}
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://mostafa2132.github.io/Book-mark/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>


          <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project10"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro10} alt={"title"} width={500} height={500} />
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
               
kerri project 


              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">

project made by html and css and js and bootstrap5              </p>
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
                      src={bootIcon}
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://mostafa2132.github.io/Morgan-Freeman/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>



    <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project11"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro11} alt={"title"} width={500} height={500} />
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
               
Daniels project


              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">

project made by html and css and js and bootstrap5              </p>
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
                      src={bootIcon}
                      className="w-full hf "
                      alt={"title"}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 font-semibold sm:text-sm md:text-xs lg:text-base  text-purple-600">
                  <Link href="https://mostafa2132.github.io/Daniels/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>

 <div className=" lg:min-h-[28.5rem] sm:h-[25rem]  h-[23rem] items-center justify-center flex  sm:w-[570px]  w-[80vw]">
            <PinContainer title={"Project12"} href={""}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh]  ">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src={pro6} alt={"title"} width={500} height={500} />
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
               Osaka Website
              </h1>
              <p className="lg:text-xl lg:font-normal  font-light line-clamp-2 text-sm">
         project where I built a fully responsive website using HTML, CSS, Bootstrap, JavaScript, and jQuery. This project gave me hands-on experience with jQuery for the first time, and I was able to integrate various cool features
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
                  <Link href="https://mostafa2132.github.io/Osaka/">
                    Show website
                  </Link>
                  <Image src={arrIcon} alt={"title"} width={10} height={10} />
                </div>
              </div>
            </PinContainer>
          </div>


        </div>
      </div>
    </BackgroundLines>



      
     
    </section>
  );
}
