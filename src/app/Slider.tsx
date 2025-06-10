import { useState } from "react";
export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(1); // Default to slide 1
      const totalSlides = 3; // Total number of slides
    
      // Function to go to the next slide (with wrap-around)
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
      };
    
      // Function to go to the previous slide (with wrap-around)
      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
      };
    return (
        <div className="relative">
          {/* Slide 1 */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              currentSlide === 1 ? "block" : "hidden"
            }`}
          >
            <section className="max-w-6xl mx-auto p-2">
              <div className="p-8 bg-blue-100 text-center rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-indigo-900">
                  Welcome to Slide 1
                </h2>
                <p className="mt-4 text-gray-700">
                  This is the first slide of the carousel. You can add any
                  content here, such as images, text, or links. For example, you
                  can show the introduction or a short description of the app or
                  service.
                </p>
              </div>

              {/* Navigation Buttons Inside the Content */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next &gt;
                </button>
              </div>
            </section>
          </div>

          {/* Slide 2 */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              currentSlide === 2 ? "block" : "hidden"
            }`}
          >
            <section className="max-w-6xl mx-auto p-2">
              <div className="p-8 bg-green-100 text-center rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold text-green-800">
                  Welcome to Slide 2
                </h2>
                <p className="mt-4 text-gray-700">
                  This is the second slide. Here, you can showcase features,
                  highlights, or additional info about your product. You can
                  also use this space to provide images or videos that
                  complement the slide content.
                </p>
              </div>

              {/* Navigation Buttons Inside the Content */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next &gt;
                </button>
              </div>
            </section>
          </div>

          {/* Slide 3 */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              currentSlide === 3 ? "block" : "hidden"
            }`}
          >
            <section className="max-w-6xl mx-auto p-2">
              <div className="px-4 py-6 bg-white/60 dark:bg-gray-800/70 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto transition-colors duration-300">
                {/* Mockup */}
                <div className="w-[140px] sm:w-[190px] rounded-[35px] overflow-hidden shadow-md">
                  <img
                    src="https://imguh.com/images/2025/06/08/Mockupcced2e63f02848c7.png"
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
                      empowers users to manage their health — from vitals
                      tracking and appointment alerts to personalized member
                      rewards.
                    </span>
                    <span className="block mt-1">
                      Designed with{" "}
                      <strong className="text-green-700 dark:text-green-300">
                        Flutter
                      </strong>{" "}
                      for silky-smooth UI and seamless cross-platform
                      performance.
                    </span>
                  </p>

                  {/* Flutter badge */}
                  <div className="flex justify-center md:justify-start mt-4">
                    <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      Flutter
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

              {/* Navigation Buttons Inside the Content */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  &lt; Previous
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
                >
                  Next &gt;
                </button>
              </div>
            </section>
          </div>
        </div>
    );
}