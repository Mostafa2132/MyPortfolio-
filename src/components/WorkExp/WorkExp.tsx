import Image from "next/image";
import { workExperience } from "../../../data";
import { Button } from "../ui/moving-border";
import img1 from "../../../public/imgs/exp1.svg"
import img2 from "../../../public/imgs/exp2.svg"
import img3 from "../../../public/imgs/exp3.svg"
import img4 from "../../../public/imgs/exp4.svg"


export default function WorkExp() {
  return (
    <section id="testimonials" className="">
  

    <h1 className="lg:text-4xl md:text-2xl text-[18px] sm:text-xs font-bold text-center">
        My{" "}
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text lg:text-4xl md:text-2xl text-[18px] sm:text-xs  font-extrabold text-transparent">
          Work Experience
        </span>
      </h1>
      <div className="">
        <div className="grid mt-12 lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className="bg-white flex-1 dark:bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
            >
             <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
{card.id === 1 && <Image src={img1} alt="work experiance img 1" width={90} height={90}/>}
{card.id === 2 && <Image src={img2} alt="work experiance img 2" width={90} height={90}/>}
{card.id === 3 && <Image src={img3} alt="work experiance img 3" width={90} height={90}/>}
{card.id === 4 && <Image src={img4} alt="work experiance img 4" width={90} height={90}/>}
<div className="lg:ms-5">
<h1 className="text-start text-lg font-bold md:text-2xl">{card.title}</h1>
<p className="text-start mt-3 font-semibold text-white-100">{card.desc}</p>

</div>
</div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
