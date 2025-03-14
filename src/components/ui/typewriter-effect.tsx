"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isTyping, setIsTyping] = useState(false); // حالة لمعرفة متى يكون النص يُكتب

  useEffect(() => {
    if (isInView) {
      const animateText = async () => {
        setIsTyping(true); // تشغيل الكروسر أثناء الكتابة

        await animate(
          "span",
          { opacity: 1, width: "fit-content", display: "inline-block" },
          { duration: 0.3, delay: stagger(0.1), ease: "easeInOut" }
        );

        setIsTyping(false); // إيقاف الكروسر أثناء الإخفاء

        await animate(
          "span",
          { opacity: 0 },
          { duration: 0.3, delay: stagger(0.05), ease: "easeInOut" }
        );

        animateText();
      };

      animateText();
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}}
                key={`char-${index}`}
                className={cn(
                  `${isTyping ? "bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-sm font-extrabold text-transparent" : ""}  opacity-0 hidden`,
                  word.className
                )}
              >
                {char}
              </motion.span>
            ))}
            &nbsp;
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-sm font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        animate={{ opacity: isTyping ? 1 : 0 }} // إخفاء الكروسر أثناء المسح
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
       
      ></motion.span>
    </div>
  );
};
