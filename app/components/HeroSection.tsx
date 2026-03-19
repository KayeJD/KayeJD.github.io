import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Resume from "../assets/files/Karryl_Dumalag_Resume.pdf";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6">
      <motion.div
        className="w-full max-w-3xl text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow label */}
        <motion.div variants={itemVariants} className="hero-eyebrow mb-4">
          Portfolio · Software Engineer
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-[70px] sm:text-[80px] text-gray-900 dark:text-white mb-4 leading-none"
        >
          <TypeAnimation
            sequence={[
              "Karryl Dumalag.",
              3500,
              "Software Engineer.",
              1500,
              "I create stuff :)",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-[70px] sm:text-[80px] text-gray-900 dark:text-white"
          />
        </motion.h1>

        <motion.div variants={fadeInVariants} className="hero-divider" />

        <motion.div
          variants={fadeInVariants}
          className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4"
        >
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

        {/* CTA row */}
        <motion.div
          variants={fadeInVariants}
          className="flex space-x-6 mt-10 items-center"
        >
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Resume →
          </a>

          <a
            href="https://github.com/KayeJD"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <Github size={28} />
          </a>

          <a
            href="https://www.linkedin.com/in/karryl-dumalag-766b2923b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-icon"
          >
            <Linkedin size={28} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
