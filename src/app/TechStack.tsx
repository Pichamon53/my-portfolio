import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faPython,
  faReact,
  faAngular,
  faVuejs,
  faNodeJs,
  faGitAlt,
  faAws,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faCloud,
  faSearch,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons';

import {
  SiTypescript,
  SiDart,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiLaravel,
  SiFlask,
  SiNextdotjs,
  SiAdobexd,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiPostman,
  SiFirebase,
  SiGooglecloud,
  SiFlutter,
  SiDocker
} from 'react-icons/si';
import { Command } from 'lucide-react';

export default function TechStack() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-900 dark:text-indigo-200 underline underline-offset-4 decoration-wavy decoration-pink-500">
        🧰 Tech Stack
      </h2>

    <div className="space-y-6 max-w-5xl mx-auto text-left">
      {/* 💻 Programming Languages */}
      <div>
        <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
          💻 Programming Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faHtml5} /> HTML
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faCss3Alt} /> CSS
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faJs} /> JavaScript
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiTypescript className="w-4 h-4" /> TypeScript
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faPhp} /> PHP
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faPython} /> Python
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiDart className="w-4 h-4" /> Dart
          </span>
          <span className="bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faDatabase} /> SQL
          </span>
        </div>
      </div>

      {/* 🧱 Frameworks & Libraries */}
      <div>
        <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
          🧱 Frameworks & Libraries
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faReact} /> ReactJS
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiNextdotjs className="w-4 h-4" /> NextJS
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faAngular} /> AngularJS
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faVuejs} /> VueJS
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faNodeJs} /> NodeJS
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiFlutter className="w-4 h-4" /> Flutter
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiLaravel className="w-4 h-4" /> Laravel
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiFlask className="w-4 h-4" /> Flask
          </span>
          <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiTailwindcss className="w-4 h-4" /> Tailwind CSS
          </span>
        </div>
      </div>

      {/* 🛠️ Tools */}
      <div>
        <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
          🛠️ Tools
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faFigma} /> Figma
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiAdobexd className="w-4 h-4" /> Adobe XD
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiAdobephotoshop className="w-4 h-4" /> Photoshop
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiAdobeillustrator className="w-4 h-4" /> Illustrator
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiPostman className="w-4 h-4" /> Postman
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faGitAlt} /> Git
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <Command className="w-4 h-4" /> Command Line
          </span>
          <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiFirebase className="w-4 h-4" /> Firebase
          </span>
        </div>
      </div>

      {/* 📦 Database */}
      <div>
        <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
          📦 Database
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiMysql className="w-4 h-4" /> MySQL
          </span>
          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <SiMongodb className="w-4 h-4" /> MongoDB
          </span>
        </div>
      </div>

      {/* ☁️ Cloud / DevOps */}
    <div>
      <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
        ☁️ Cloud / DevOps
      </h3>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <SiGooglecloud className="w-4 h-4" /> GCP
        </span>
        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <FontAwesomeIcon icon={faAws} /> AWS
        </span>
        <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
          <SiDocker className="w-4 h-4" /> Docker
        </span>
      </div>
    </div>

      {/* 🧠 Other Skills */}
      <div>
        <h3 className="text-base font-semibold mb-2 text-slate-800 dark:text-slate-200 text-center">
          🧠 Other Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faSearch} /> SEO
          </span>
          <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faCloud} /> SEM
          </span>
          <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faTerminal} /> Agile Workflow
          </span>
          <span className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <FontAwesomeIcon icon={faCloud} /> UX Research & Testing
          </span>
        </div>
      </div>
    </div>
  </section>
  );
}
