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
    image: "/images/expenses.png",
  },
  {
    title: "Manage Your Income",
    description:
      "Keep a record of all your income sources and monitor your financial growth.",
    image: "/images/income.png",
  },
  {
    title: "Set Savings Goals",
    description:
      "Set and achieve your savings goals with our intuitive goal-setting feature.",
    image: "/images/savings.png",
  },
  {
    title: "Generate Reports",
    description:
      "Generate detailed financial reports to analyze your spending and income patterns.",
    image: "/images/reports.png",
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
      <AnimatePresence>
        <motion.div
          key={currentFeature}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4">
            {features[currentFeature].title}
          </h1>
          <p className="text-lg mb-8">{features[currentFeature].description}</p>
          <img
            src={features[currentFeature].image}
            alt={features[currentFeature].title}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </AnimatePresence>
      <Button
        onClick={() => router.push("/auth")}
        className="mt-8 bg-white text-blue-500 font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
      >
        Try Now
      </Button>
    </div>
  );
}
