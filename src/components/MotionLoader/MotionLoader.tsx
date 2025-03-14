"use client"; // نحتاجه فقط هنا
import { motion } from "framer-motion";

const MotionLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center space-y-4"
            >
                {/* دائرة التحميل */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-16 h-16 border-4 border-t-transparent border-white rounded-full"
                />
                
                {/* نص التحميل */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg font-semibold"
                >
                    Loading...
                </motion.p>
            </motion.div>
        </div>
    );
};

export default MotionLoader;
