
export default function MagicBtn({
  title,
  postion,
  handleClick,
  icon,
}: {
  title: string;
  postion: string;
  icon: React.ReactNode;
  handleClick?: () => void;
  otherClass?: string;
}) {
  return (
    <button onClick={handleClick}  className="relative cursor-pointer   w-full inline-flex h-12 md:mt-10 lg:mt-4 overflow-hidden rounded-xl p-[1px] ">
      <span className="absolute inset-[-1000%]  animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span  className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-5 text-sm font-medium text-white backdrop-blur-3xl">
        {postion === "left" && icon}
        {title}
        {postion == "right" && icon}
      </span>
    </button>
  );
}
