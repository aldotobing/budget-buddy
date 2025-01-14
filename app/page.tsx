"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Track Your Expenses",
    description:
      "Easily track and categorize your expenses to manage your budget effectively.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 mx-auto"
      >
        <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm14 0h2v2h-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Manage Your Income",
    description:
      "Keep a record of all your income sources and monitor your financial growth.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 mx-auto"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14v-4H8l4-5 4 5h-3v4h-2z" />
      </svg>
    ),
  },
  {
    title: "Set Savings Goals",
    description:
      "Set and achieve your savings goals with our intuitive goal-setting feature.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 mx-auto"
      >
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    ),
  },
  {
    title: "Generate Reports",
    description:
      "Generate detailed financial reports to analyze your spending and income patterns.",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-24 h-24 mx-auto"
      >
        <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm0 4h10v2H5v-2zm0 4h14v2H5v-2zm0 4h10v2H5v-2z" />
      </svg>
    ),
  },
];

export default function Home() {
  const router = useRouter();
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4">
      <div className="flex flex-col items-center">
        <AnimatePresence>
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">
              {features[currentFeature].title}
            </h1>
            <p className="text-lg mb-8">
              {features[currentFeature].description}
            </p>
            <div className="w-full max-w-md mx-auto rounded-lg shadow-lg">
              {features[currentFeature].svg}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        onClick={() => router.push("/auth")}
        className="mt-8 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 fixed bottom-8"
      >
        Try Now
      </Button>
    </div>
  );
}
