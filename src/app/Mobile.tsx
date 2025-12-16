import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlutter,
} from "@fortawesome/free-brands-svg-icons";

export default function Mobile() {
  return (
    <section className="max-w-6xl mx-auto p-2">
      <div className="text-center mb-5">
        <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-200 underline underline-offset-4 decoration-wavy decoration-pink-500">
          📱 Mobile Application
        </h2>
      </div>

      <div className="px-4 py-6 bg-white/60 dark:bg-gray-800/70 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto transition-colors duration-300">
        {/* Mockup */}
        <div className="w-[140px] sm:w-[190px] rounded-[35px] overflow-hidden shadow-md">
          <img
            src="https://i.ibb.co/jvyBhgBw/Mockup.png"
            alt="True Privilege App Mockup"
            className="w-full h-auto"
          />
        </div>

        {/* Description */}
        <div className="max-w-md text-center md:text-left text-gray-700 dark:text-gray-200 space-y-3">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            True Privilege App
          </h3>
          <p className="text-sm md:text-base leading-relaxed">
            An all-in-one{" "}
            <strong className="text-indigo-700 dark:text-indigo-300">
              wellness and lifestyle app
            </strong>{" "}
            built for today’s connected generation.
            <span className="block mt-1">
              <strong className="text-indigo-700 dark:text-indigo-300">
                True Privilege
              </strong>{" "}
              empowers users to manage their health — from vitals tracking and
              appointment alerts to personalized member rewards.
            </span>
            <span className="block mt-1">
              Designed with{" "}
              <strong className="text-green-700 dark:text-green-300">
                Flutter
              </strong>{" "}
              for silky-smooth UI and seamless cross-platform performance.
            </span>
          </p>

          {/* Flutter badge */}
          <div className="flex justify-center md:justify-start mt-4">
            <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <FontAwesomeIcon icon={faFlutter} /> Flutter
            </span>
          </div>

          {/* App store buttons */}
          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <a
              href="https://apps.apple.com/us/app/true/id394602822"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10"
              />
            </a>

            <a
              href="https://play.google.com/store/search?q=true&c=apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
