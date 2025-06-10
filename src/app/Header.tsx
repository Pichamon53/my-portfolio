import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      root.classList.add("dark");
    } else if (savedTheme === "light") {
      setDarkMode(false);
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      root.classList.toggle("dark", prefersDark);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <section className="relative w-full py-10 bg-gradient-to-br from-rose-100 via-sky-100 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden shadow-inner">
      {/* Background blob or decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-sky-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Dark Mode Toggle */}
      <div className="relative z-10 flex justify-end max-w-6xl mx-auto px-6 mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-16 h-9 rounded-full flex items-center justify-between px-2 transition-colors duration-300 ease-in-out ${
            darkMode ? "bg-gray-700" : "bg-yellow-300"
          }`}
          title="Toggle Dark Mode"
        >
          <FontAwesomeIcon
            icon={faMoon}
            className="text-sm text-gray-800 dark:text-white z-10"
          />
          <FontAwesomeIcon
            icon={faSun}
            className="text-sm text-yellow-500 z-10"
          />
          <span
            className={`absolute top-1 left-1 w-7 h-7 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Main Header Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-orange-500 drop-shadow-lg">
          Pichamon Phatcharasirinawakun
        </h1>

        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-4 py-1 rounded-full shadow">
            Web Developer
          </span>
          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-4 py-1 rounded-full shadow">
            Full-Stack Developer
          </span>
          <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xs font-semibold px-4 py-1 rounded-full shadow">
            UX/UI Designer
          </span>
        </div>

        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Multi-skilled developer with 6+ years of hands-on experience in
          building responsive, high-performance web and mobile applications
          using{" "}
          <strong className="text-indigo-600 dark:text-indigo-300 font-semibold">
            React, Vue.js, Flutter, Node.js
          </strong>{" "}
          and{" "}
          <strong className="text-pink-600 dark:text-pink-300 font-semibold">
            modern UI/UX practices
          </strong>
          . Passionate about clean code, scalable architecture, and seamless
          user experience.
        </p>
      </div>
    </section>
  );
}
