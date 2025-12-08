import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.theme === "light") return false;
      return true; // default dark
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const handleScrollTo = (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    // Section exists → scroll smoothly
    const headerOffset = 128;
    const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" });
  } else {
    window.location.href = `/#${id}`;
  }
};


  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
        <div className="w-full mx-4 md:mx-8 backdrop-blur-md bg-white/60 dark:bg-gray-900/50 border border-white/20 dark:border-gray-800/40 shadow-lg rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300">
            <a
            href="/"
            className="text-3xl font-abril text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              KD<span className="text-blue-600 dark:text-blue-400">.</span>
            </a>

            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 font-medium">
                {[
                  { label: "Experience.", id: "experience" },
                  { label: "Projects.", id: "projects" },
                  { label: "Extras.", id: "extras" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScrollTo(item.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>


              <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-md bg-gray-200/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 hover:bg-gray-300/60 dark:hover:bg-gray-700/60 transition"
                  aria-label="Toggle theme"
              >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
        </div>
    </header>
  );
}
