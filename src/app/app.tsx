"use client";


import Header from "./Header";
import TechStack from "./TechStack";
import WebPreview from "./WebPreview";
import Mobile from "./Mobile";
import Contact from "./Contact";

export default function App() {
  

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 via-sky-100 to-lime-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <div className="space-y-10">
        <Header />
        <TechStack />
        <WebPreview />
        <Mobile />
        

        <Contact />
      </div>
    </div>
  );
}
