import React from "react";
import { Link } from "react-router";
import { Badge } from "@/app/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  tags: string[];
  status?: string;
  link?: string;
}

// FIX 1: Defined once outside the component so it's not recreated on every render.
const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tags,
  status,
  link,
}) => {
  // FIX 2: Shared image div content — avoids duplicating JSX across the link/no-link branches.
  const imageContent = (
    // FIX 3: Replaced `backgroundImage` style prop with a real <img> tag.
    // Background-image via inline style bypasses the browser's native lazy loading
    // and image decoding optimizations. Using <img> with loading="lazy" and
    // decoding="async" lets the browser defer off-screen images entirely,
    // which is the single biggest fix for scroll lag in the projects section.
    <div className="relative h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-transform duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
      </div>
    </div>
  );

  return (
    // FIX 4: Re-enabled the scroll animation (it was commented out), but moved it to
    // the outer wrapper and used the pre-defined `cardVariants` object (see FIX 1).
    // `viewport={{ once: true }}` is critical — without it, Framer Motion's
    // IntersectionObserver re-fires the animation on every scroll pass, which is
    // expensive and causes jank. `amount: 0.1` triggers early so the animation
    // is already done before the card is fully in view.
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center py-8"
    >
      {/* FIX 5: Added `group` class here so the hover effects on the image work correctly
          regardless of whether the card is wrapped in a Link or not. */}
      <div className="group w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 transition-all">

        {/* Image Section */}
        {link ? (
          <Link to={link}>{imageContent}</Link>
        ) : (
          imageContent
        )}

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-gray-700 dark:text-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <div className="text-center mt-6 px-6 pb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {status ? (
            <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400 italic">
              {status}
            </p>
          ) : (
            link && (
              <Link
                to={link}
                className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
              >
                View details
              </Link>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
