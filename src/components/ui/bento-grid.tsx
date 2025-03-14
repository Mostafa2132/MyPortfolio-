"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import img1 from "../../../public/imgs/b1.svg";
import img2 from "../../../public/imgs/b4.svg";
import img3 from "../../../public/imgs/b5.svg";
import img4 from "../../../public/imgs/grid.svg";
import { GlobeDemo } from "./globDemo";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "../../../data/confetti.json";
import MagicBtn from "./MagicBtn";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 overflow-hidden sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  spareImg?: string;
  imgClassName?: string;
  img?: string;
  titleClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText("12m0stafa7@gmail.com");
  };
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento hover:shadow-xl overflow-hidden transition duration-200 relative shadow-input border border-white/[.1]  justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 ? "flex justify-center  " : ""} h-full `}>
        {/* 1 */}
        <div className="absolute w-full ">
          {img1 && id === 1 && (
            <Image
              src={img1}
              alt={`img`}
              width={400}
              height={400}
              className={cn(imgClassName, "object-contain  object-center")}
            />
          )}
        </div>
        <div className="absolute  w-full  overflow-hidden  ">
          {img2 && id === 4 && (
            <>
              <Image
                src={img2}
                alt={`img`}
                width={400}
                height={400}
                className={cn(imgClassName, "object-contain  object-center")}
              />
            </>
          )}
        </div>
        <div className="absolute right-2 top-2 ">
          {img3 && id === 5 && (
            <Image
              src={img3}
              alt={`img`}
              width={400}
              height={400}
              className={cn("object-contain    object-center")}
            />
          )}
        </div>
        {/* 2 */}
        <div
          className={`absolute -z-10 -bottom-5 right-0 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {id === 5 && (
            <Image
              src={img4}
              alt={`spareImg`}
              width={400}
              height={400}
              className={`object-cover rounded-2xl object-center w-full h-full`}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 md:h-full relative min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans z-10 font-extralight  text-[#c1c2d3] text-sm md:text-xs lg:text-base">
            {description}
          </div>
          <div className="font-sans text-lg font-bold lg:text-3xl max-w-96 z-20">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="w-fit absolute  -right-3 lg:-right-2 flex gap-1 lg:gap-5">
              <div className="flex flex-col   gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]  opacity-50 lg:opacity-100" />

                {["Next.js", "React.js", "Typescript"].map((item) => (
                  <span
                    key={item}
                    className=" py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col   gap-3 lg:gap-8">
                {["SASS", "TailwindCss", "jQuery"].map((item) => (
                  <span
                    key={item}
                    className=" py-2 lg:py-2 lg:px-3 px-1 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]  opacity-50 lg:opacity-100" />
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative  ">
              <div className={`absolute w-full h-full right-0 -bottom-5`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>
              <MagicBtn
                title={copied === true ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline />}
                postion="left"
                otherClass={`bg-[#161a31]`}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
