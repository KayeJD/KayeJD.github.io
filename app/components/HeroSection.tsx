import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Resume from "../assets/files/Karryl_Dumalag_Resume.pdf";
import { motion } from "framer-motion";

// FIX 1: Define animation variants outside the component so the objects are
// created once at module load, not on every render. When these are defined
// inline (e.g. `initial={{ opacity: 0, y: 20 }}`), React creates a brand-new
// object on every render, which can cause Framer Motion to re-evaluate and
// re-animate even when nothing has changed.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      // FIX 2: Use staggerChildren to orchestrate the sequence of child animations
      // from a single parent, instead of manually setting `delay` on each child.
      // This is cleaner AND more performant since Framer Motion can batch them.
      staggerChildren: 0.3,
    },
  },
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
      {/* FIX 3: Wrap everything in one orchestrating motion.div using `animate` 
          (not whileInView — this section is visible on load). The children use 
          `variants` which automatically inherit the parent's animate/initial states,
          so you don't need to repeat `animate` and `initial` on every child. */}
      <motion.div
        className="w-full max-w-3xl text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-[70px] sm:text-[80px] text-gray-900 dark:text-white mb-4"
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
            className="text-[70px] sm:text-[80px] text-gray-900 dark:text-white mb-4"
          />
        </motion.h1>

        <motion.div
          variants={fadeInVariants}
          className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4"
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

        {/* FIX 4: Removed the redundant nested motion.a inside motion.div.
            The outer motion.div handles the fade-in. Nesting motion elements
            that both animate opacity causes the browser to composite two separate
            GPU layers for one element — wasteful and occasionally glitchy. */}
        <motion.div
          variants={fadeInVariants}
          className="flex space-x-6 mt-10 items-center"
        >
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-md font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
          >
            My Resume
          </a>

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
      </motion.div>
    </section>
  );
}
