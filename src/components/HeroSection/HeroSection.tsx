"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, MailOpenIcon, MapPin, Rocket } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import mapImage from "../../assets/Images/about/map.png";

import { Zeyada } from "next/font/google";
import { twMerge } from "tailwind-merge";

const dancingScript = Zeyada({
  subsets: ["latin"],
  weight: "400", // Include only the weights you need
});
export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "Job Searching...";
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-10 overflow-hidden">
      {/* Header */}

      {/* Main Content */}
      <main className="relative mx-auto grid  grid-cols-2 items-center p-6 container">
        {/* Left Column */}
        <div className="z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={twMerge(" text-7xl text-gray-400", dancingScript.className)}>{text}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold leading-tight">
              The Best <span className="text-pink-500">Job Board</span> Around.
            </h1>
            <h2 className="mt-2 text-3xl">Welcome to StaffScout.</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-xl text-gray-600"
          >
            A remarkable theme designed specifically for creating comprehensible
            job boards with ease. Packed full with outstanding elements and
            features excellent for presenting & finding job opportunities as
            well as candidates.
          </motion.p>

          {/* Chat Bubble */}
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative mt-8 w-fit"
              >
                <motion.div
                  className="rounded-lg bg-[#4285F4] p-4 text-white shadow-lg"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ type: "spring", delay: 0.1 }}
                >
                  <p>Hi, Nick! Please send us your CV</p>
                  <div className="absolute -bottom-2 left-4 h-4 w-4 rotate-45 bg-[#4285F4]"></div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessage(true)}
            className="mt-8 rounded-lg bg-[#4285F4] px-6 py-3 text-white shadow-lg transition-transform hover:bg-blue-600 active:bg-blue-700"
          >
            Click Here to Apply
          </motion.button>
        </div>

        {/* Right Column - Map */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex h-[600px] w-[600px] items-center justify-center rounded-full border-2 border-blue-100 bg-blue-50/10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex h-[500px] w-[500px] items-center justify-center rounded-full border-2 border-blue-200 bg-blue-100/10 bg-opacity-50"
            >
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative h-[400px] w-[400px] overflow-hidden rounded-full"
                >
                  <Image
                    src={mapImage}
                    alt="New York Map"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute -left-24 top-20"
                >
                  <div className="rounded-full bg-emerald-400 p-4">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="absolute -right-28 bottom-40"
                >
                  <div className="rounded-full bg-blue-500 p-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [10, 20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-10 left-20"
                >
                  <div className="rounded-full bg-red-500 p-4">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                  className="absolute -top-20 right-36"
                >
                  <div className="rounded-full bg-gray-500 p-4 text-red-500">
                    <MailOpenIcon className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
