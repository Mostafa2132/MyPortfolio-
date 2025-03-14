import Image from "next/image";
import img from "../../../public/imgs/footer-grid.svg";
import MagicBtn from "../ui/MagicBtn";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className=" w-full ">
      <div className="w-full absolute -z-10 left-0 -bottom-72 min-h-96">
        <Image
          src={img}
          alt="bg"
          className="w-full h-full opacity-50 "
          width={500}
          height={500}
        />
      </div>
      <div className="flex items-center r flex-col">
        <h1 className="lg:max-w-[45vw] text-lg md:text-2xl font-bold text-center">
          Ready to Take <span className="text-pink-600">Your</span> digital
          presence to the next level?{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today to learn more about how we can help you take
          your business to the next level.
        </p>
        <Link
          href="mailto:12m0stafa7@gmail.com"
          className="btn btn-primary btn-wide mt-10"
        >
          <MagicBtn
            title={"Contact Me"}
            postion={"right"}
            icon={<FaLocationArrow />}
          />
        </Link>
      </div>
      <div className="flex items-center md:flex-row flex-col  justify-between mt-10">
        <p className=" md:text-base text-sm font-light md:font-normal gap-2">
          {" "}
          &copy; copyright 2025 <span className="text-pink-600">Mostafa Ebrahem</span>
        </p>
        <div className="flex  items-center mt-5 md:mt-0 gap-2  md:gap-3 lg:gap-6 ">
 <Link
  href="https://github.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-pink-600 0 size-9 flex items-center justify-center bg-none hover:bg-pink-500 hover:text-white rounded-full transition-colors duration-300"
>
  <i className="fa-brands cursor-pointer fa-github text-2xl"></i>
</Link>
  
          <Link
            href='https://www.instagram.com/mostafa_ebrahem_0?igsh=NG1ubW9rNXZpODdk'
            target="_blank"
            className="  text-pink-600 0 size-9 flex items-center justify-center bg-none hover:bg-pink-500 hover:text-white rounded-full transition-colors duration-300"  
          >
           <i className="fa-brands cursor-pointer text-2xl fa-instagram"></i>
          </Link>
          <Link
            href='https://www.linkedin.com/in/mostafa-ebrahem-81120a288/'
            target="_blank"
            className=" text-pink-600 0 size-9 flex items-center justify-center bg-none hover:bg-pink-500 hover:text-white rounded-full transition-colors duration-300"
          >
           <i className="fa-brands cursor-pointer text-2xl fa-linkedin"></i>
          </Link>
        </div>
      </div>



    </footer>
  );
}
