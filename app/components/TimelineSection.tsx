import React from "react";
import type { ReactNode } from "react";

interface TimelineSectionItem {
  label: string;
  date: string;
  title: string;
  titleUrl?: string;
  description: ReactNode | ReactNode[];
}

interface TimelineSectionProps {
  items: TimelineSectionItem[];
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="max-w-4xl w-full mx-auto centered">
      <div className="my-6 relative">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 sm:pl-48 py-8 group">
            <div className="font-caveat font-medium text-2xl text-indigo-500 dark:text-indigo-400 mb-1 sm:mb-0">
              {item.label}
            </div>

          {/* This dic classname is what creates the vertical timeline line */}
            <div
              className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden
              before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 dark:before:bg-slate-700
              sm:before:ml-[11rem] before:self-start before:-translate-x-1/2 before:translate-y-3
              after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 dark:after:bg-indigo-400 after:border-4
              after:box-content after:border-slate-50 dark:after:border-slate-800 after:rounded-full sm:after:ml-[11rem]
              after:-translate-x-1/2 after:translate-y-1.5"
            >
              {/* This is the pill that the date */}
              <time
                className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center 
                text-xs font-semibold uppercase w-40 h-6 mb-3 sm:mb-0 
                text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 rounded-full"
              >
                {item.date}
              </time>

              {/* NOTE TO FUTURE SELF : Link from react-router is mainly used for client side routing. 
                  You're gonna think about using Link instead of the standard a href again. pls dont  */}
              <div className="text-xl font-bold">
                {item.titleUrl ? (
                  <a
                    href={item.titleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 dark:text-slate-100
                              hover:text-blue-600
                              dark:hover:text-blue-400 transition"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-slate-900 dark:text-slate-100">
                    {item.title}
                  </span>
                )}
              </div>

            </div>

            <div className="text-slate-600 dark:text-slate-400">
              {Array.isArray(item.description) ? (
                <ul className="list-disc ml-6 space-y-1">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
