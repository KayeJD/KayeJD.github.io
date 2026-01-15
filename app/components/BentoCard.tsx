import { motion } from "framer-motion";

export const BentoCard = ({ children, className = "", title, icon: Icon }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className={`
      relative overflow-hidden p-6 
      bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm
      border border-neutral-200 dark:border-neutral-700 
      rounded-3xl flex flex-col justify-between
      shadow-sm hover:shadow-md transition-shadow
      ${className}
    `}
  >
    <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 mb-4">
      {Icon && <Icon size={18} />}
      <span className="text-xs font-bold uppercase tracking-widest">{title}</span>
    </div>

    <div className="flex-1 flex flex-col justify-center w-full overflow-hidden">
      {children}
    </div>
  </motion.div>
);