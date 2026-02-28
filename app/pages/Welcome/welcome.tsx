// Components
import { HeroSection } from "@/app/components/HeroSection";
// import { SkillsSection } from "~/components/SkillsSection";
import ProjectCard from "@/app/components/ProjectCard";
import { Header } from "@/app/components/Header"; 
import { TimelineSection } from "@/app/components/TimelineSection";
import { Footer } from "~/components/Footer";
import { SectionBgText } from "@/app/components/SectionBgText";

// Images
import volexImg from "@/app/images/volexmain.webp";
import { effortloggerMain } from "~/images/effortlogger";
import { creditCardMain } from "~/images/credit-card-ml";
import { SpotifyMain } from "~/images/spotify-unlimited";
import { MicroMain } from "~/images/microprocessor";
import { HVACMain } from "~/images/hvac";

// ... the other stuff
import { motion } from "framer-motion";
import { useDarkMode } from "~/hooks/Themetoggle";
import { Link } from "react-router";

export function ThemeToggle() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}



export function Welcome() {
  const disableExtrasPage = true;

  const experienceData = [
    {
      label: "Software Engineer",
      date: "Jul 2025 - Present",
      title: "Irenix Empowerment Foundation",
      titleUrl: "https://irenix.org/",
      description: (
        <>
          This has been a volunteering experience where I helped design, build, and refine the backend for an EHR system ground up to manage patient data in the <strong>Google Cloud environment.</strong> I also contributed to integrating <strong>AI/ML</strong> to support predictive analytics and automated health insights. This experience was basically a deep dive into <strong>system design</strong> and <strong>healthcare tech.</strong>
        </>
      ),
    },
    {
      label: "Software Engineer Fellow",
      date: "Aug 2024 - May 2025",
      title: "General Dynamics Mission Systems",
      titleUrl: "https://gdmissionsystems.com/",
      description: (
        <>
          This experience was part of my graduation Capstone project worked on secure communications systems for GDMS where, in short, I worked on developing <strong>automated testing tools</strong> that supported reliability and performance. It was a great experience blending <strong>precision engineering</strong> with <strong>building for scale</strong> from the ground up.
        </>
      ),
    },
    {
      label: "Software Developer Intern",
      date: "Mar 2024 - Apr 2025",
      title: "28 Gorilla Engineering",
      titleUrl: "https://www.28gorilla.com/",
      description: (
        <>
          At 28 Gorilla, I worked on a range of <strong>IoT and embedded systems projects</strong>, contributing to the design of tools for processing real-time telemetry. Through this work, I deepened my understanding of <strong>backend systems, application development, and effective collaboration</strong> within an engineering team.
        </>
      ),
    },

    {
      label: "Enterprise Technical Support Specialist",
      date: "Jan 2023 - Jul 2023",
      title: "EAW",
      titleUrl: "https://eaw.org/",
      description: (
        <>
          My early tech days were all about problem-solving, helping enterprise clients troubleshoot Microsoft Surface devices and network systems. It’s where I developed a knack for debugging and communicating complex issues clearly.
        </>
      ),
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center py-32 bg-neutral-50 dark:bg-neutral-900 min-h-screen bg-grid overflow-x-hidden">

      <Header />

      <section className="relative w-full flex flex-col items-center justify-center py-32">
        <SectionBgText text="ABOUT" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <HeroSection />
        </motion.div>
      </section>

      {/* <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SkillsSection />
      </motion.div> */}

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="EXPERIENCE" />
        <div id="experience" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-white">
            My Experience
          </h1>
          <TimelineSection items={experienceData} />
        </div>
      </section>
    

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="PROJECTS" />
        <div id="projects" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-abril text-gray-900 dark:text-white">
            Side Projects
          </h1>

          <ProjectCard
            title="VOLEX"
            image={volexImg}
            description="VOLEX is a web application that aims to relieve the tediousness and hassles of monitoring and maintaining one's finances."
            tags={["Next.js", "TypeScript", "TailwindCSS", "Dwolla", "Plaid"]}
            status="In Progress..."
            link="https://github.com/KayeJD/Volex"
          />

          <ProjectCard
            title="Fraud Detection Machine Learning"
            image={creditCardMain}
            description="Analyzes a Kaggle dataset with 284,807 transactions to detect fraud using machine learning models such as Logistic Regression, Random Forest, and Gradient Boosting."
            tags={["Python", "Machine Learning", "Data Modeling", "Data Analysis"]}
            link="credit-card-ml-project"
          />

          <ProjectCard
            title="Spotify Web API"
            image={SpotifyMain}
            description="Integrates Spotify’s API into a web app for authentication, top track access, and personalized music recommendations with interactive UI."
            tags={["JavaScript", "Pug / CSS", "API", "Express.js", "OAuth 2.0"]}
            link="https://github.com/KayeJD/Spotify-Unwrapped-Unlimited"
          />

          <ProjectCard
            title="Microprocessor"
            image={MicroMain}
            description="Engineered the digital logic for a brainless microprocessor programmable through ROM value manipulation."
            tags={["Verilog", "Digital Logic"]}
            link="https://github.com/KayeJD/Microprocessor/blob/main/README.md"
          />

          <ProjectCard
            title="HVAC Design"
            image={HVACMain}
            description="Designed a controller to regulate temperature as part of a thermostat system, ensuring safe operation of HVAC equipment."
            tags={[
              "Engineering Design",
              "Circuit Design",
              "Digital Signal Processing",
              "Project Management",
            ]}
            link="https://github.com/KayeJD/HVAC-System/tree/main"
          />

          <ProjectCard
            title="EffortLogger 2.0"
            image={effortloggerMain}
            description="A remake and improvement over the original EffortLogger Excel Visual Basic Program, written in Java for flexibility and using a localhost SQL database."
            tags={["Java / JavaFX", "SQL", "Authentication", "Documentation", "Agile / Scrum"]}
            link="effortlogger-project"
          />
        </div>
      </section>

      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <SectionBgText text="EXTRAS" />
        <div id="extras" className="scroll-mt-32 mt-12 mb-8">
          <h1 className="text-4xl md:text-5xl text-gray-900 dark:text-white">
            Extras / After Hours
          </h1>

          <div className="w-full max-w-3xl text-left">
            <div className="mt-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4">
              <p>The side notes, the things that don&apos;t necessarily fit under a work portfolio: hobbies, side interests, and mild distractions.  If the link doesn&apos;t work, I probably got cold feet during an update and turned it off... for now heh~.</p>

              {/* This one looks like a link */}
              <Link
                to={disableExtrasPage ? "#" : "/extras-page"}
                onClick={(e) => disableExtrasPage && e.preventDefault()}
                aria-disabled={disableExtrasPage}
                tabIndex={disableExtrasPage ? -1 : 0}
                className={`
                  text-gray-700 dark:text-gray-200 transition
                  ${disableExtrasPage ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:text-blue-600 dark:hover:text-blue-400"}
                `}
              >
                Take a look →
              </Link>

              {/* This one looks like a button */}
              {/* <Link
                to={disableExtrasPage ? "#" : "/extras-page"}
                onClick={(e) => {
                  if (disableExtrasPage) e.preventDefault();
                }}
                aria-disabled={disableExtrasPage}
                tabIndex={disableExtrasPage ? -1 : 0}
                className={`
                  inline-flex items-center justify-center
                  px-6 py-3 border-2 rounded-md font-medium transition
                  ${
                    disableExtrasPage
                      ? "border-gray-400 text-gray-400 opacity-50 cursor-not-allowed pointer-events-none"
                      : "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900"
                  }
                `}
              >
                Take a look →
              </Link> */}

            </div>
          </div>

        </div>
      </section>
      
      <section className="relative w-full flex flex-col items-center justify-center py-32 px-6">
        <Footer/>
      </section>
          
    </main>

  );
}
