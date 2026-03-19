import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  status?: string;
  link?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

// ── Tag categorization ──── ( extra? ... maybe)

const LANGUAGES = new Set([
  "python", "javascript", "typescript", "verilog", "java", "java / javafx",
  "sql", "html", "css", "c", "c++", "c#", "rust", "go", "kotlin", "swift",
  "bash", "r", "matlab",
]);

const FRAMEWORKS = new Set([
  "next.js", "react", "tailwindcss", "express.js", "pug / css", "javafx",
  "vue", "nuxt", "svelte", "angular", "django", "flask", "fastapi",
  "spring", "laravel", "rails", "flutter", "react native",
]);

type TagCategory = "language" | "framework" | "other";

function classifyTag(tag: string): TagCategory {
  const normalized = tag.toLowerCase().trim();
  if (LANGUAGES.has(normalized)) return "language";
  if (FRAMEWORKS.has(normalized)) return "framework";
  return "other";
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tags,
  status,
  link,
}) => {
  const imageContent = (
    <div className="relative h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Title  */}
      <div className="absolute bottom-0 left-0 p-5">
        <div className="project-card-eyebrow">Project</div>
        <h2 className="project-card-title">{title}</h2>
      </div>
    </div>
  );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center py-8"
    >
      <div className="project-card group w-full max-w-4xl">
        {link ? (
          <Link to={link}>{imageContent}</Link>
        ) : (
          imageContent
        )}

        <div className="px-6 pt-5 pb-7">
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag, idx) => {
              const category = classifyTag(tag);
              return (
                <span
                  key={idx}
                  className={`project-tag project-tag--${category}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <p className="project-card-desc">{description}</p>

          <div className="mt-5">
            {status ? (
              <span className="project-card-status">{status}</span>
            ) : (
              link && (
                <Link to={link} className="project-card-link">
                  View details →
                </Link>
              )
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
