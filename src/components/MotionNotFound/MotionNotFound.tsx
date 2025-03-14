"use client"; 
import { motion } from "framer-motion";

const MotionNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-[#0F172A] text-white">
            {/* رقم 404 بتأثير تحريك */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-8xl font-bold bg-gradient-to-br from-pink-500 to-violet-500 text-transparent bg-clip-text"
            >
                404
            </motion.h1>

            {/* رسالة الخطأ بتأثير Fade In/Out */}
            <motion.p
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mt-4 text-xl font-semibold tracking-wide"
            >
                Oops! The page you are looking for does not exist.
            </motion.p>

            {/* زر الرجوع إلى الرئيسية */}
            <motion.a
                href="/"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mt-6 px-6 py-3 bg-pink-500 text-white font-medium rounded-lg shadow-md transition"
            >
                Go Home
            </motion.a>
        </div>
    );
};

export default MotionNotFound;
