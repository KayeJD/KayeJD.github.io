import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Resume from "../assets/files/Karryl_Dumalag_Resume.pdf";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="w-full max-w-3xl text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[70px] sm:text-[80px] text-gray-900 dark:text-white mb-4"
        >
          Karryl Dumalag.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              "Software Engineer.",
              1500,
              "Student.",
              1500,
              "I do stuff :)",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4"
        >
          <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Welcome!
          </p>
          <p>
            This website is my playground. A mini showcase of my coding adventures,
            from side projects that kept me up way past my bedtime to academic
            endeavors that challenged my brain in all the right ways.
          </p>
          <p>
            So grab a cup of your favorite caffeinated beverage (I recommend a
            double espresso) and take a look around! You might find something
            that sparks curiosity, piques your interest, or even makes you laugh
            (hopefully not at my expense...)
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex space-x-6 mt-10"
        >
          <a
            href="https://github.com/KayeJD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            <Github size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/karryl-dumalag-766b2923b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-500 transition"
          >
            <Linkedin size={32} />
          </a>
        </motion.div>

        <motion.a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-md font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          My Resume
        </motion.a>
      </div>
    </section>
  );
}
