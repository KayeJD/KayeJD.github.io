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

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  tags,
  status,
  link,
}) => {
  return (
    <motion.div 
      // initial={{ opacity: 0, y: 25 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center py-8">
      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg bg-neutral-100 dark:bg-neutral-800 transition-all">
        
        {/* Image Section */}
        {link ? (
          <Link to={link}>
            <div
              className="block h-120 bg-cover bg-center opacity-90 hover:opacity-100 hover:scale-[1.02] transition-transform duration-300"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="flex items-center justify-center h-full bg-black/40">
                <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
              </div>
            </div>
          </Link>
        ) : (
          <div
            className="block h-72 bg-cover bg-center opacity-90 hover:opacity-100 hover:scale-[1.02] transition-transform duration-300"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="flex items-center justify-center h-full bg-black/40">
              <h2 className="text-4xl font-bold text-white tracking-wide">{title}</h2>
            </div>
          </div>
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
