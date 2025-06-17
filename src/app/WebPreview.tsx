import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faBootstrap,
  faJs,
  faPython,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FaCarSide } from "react-icons/fa";

export default function WebPreview() {
  return (
    <section className="max-w-6xl mx-auto p-6 sm:p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-900 dark:text-indigo-200 underline underline-offset-4 decoration-wavy decoration-pink-500">
        🌐 Website Previews
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://imguh.com/images/2025/06/10/Screenshot-2568-06-09-at-10.53.47d578a7c48c7fdf57.png"
            alt="Apartments Near UTCC"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                Apartments Near UTCC
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Top 10 apartment listings near UTCC for international students,
                with full details and exclusive benefits.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faHtml5} /> HTML5
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faWind} /> Tailwind
                </span>
              </div>
            </div>
            <a
              href="https://apartments.utcc.ac.th/index.php?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://imguh.com/images/2025/06/08/Screenshot-2568-06-09-at-06.46.37a8fa4b85b0856681.png"
            alt="แนะนำหอพักนักศึกษาไทย UTCC"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                แนะนำหอพักนักศึกษาไทย UTCC
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                หน้ารวมข้อมูลหอพักใกล้มหาวิทยาลัย
                พร้อมสิทธิพิเศษและรายละเอียดครบถ้วนสำหรับนักศึกษาไทย
                ม.หอการค้าไทย
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faHtml5} /> HTML5
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faWind} /> Tailwind
                </span>
              </div>
            </div>
            <a
              href="https://dorm.utcc.ac.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://i.ibb.co/zHDzN3S3/Screenshot-2568-06-08-at-19-58-15.png"
            alt="TruePoint Landing Page"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                TruePoint Campaign
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A responsive promotional landing page for TruePoint privileges.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faHtml5} /> HTML5
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </span>
              </div>
            </div>
            <a
              href="https://privilege.trueid.net/th/truepoint"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-indigo-400 via-blue-500 to-pink-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://imguh.com/images/2025/06/10/Screenshot-2568-06-10-at-15.32.528febdef45a479856.png"
            alt="Truecard Landing Page"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                TrueCard
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Modern, mobile-first landing page for TrueCard Showcases
                exclusive TruePoint privileges and offers seamless user
                interaction.{" "}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faHtml5} /> HTML5
                </span>
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
                </span>
              </div>
            </div>
            <a
              href="https://privilege.trueid.net/truecard"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://img2.pic.in.th/pic/Screenshot-2568-06-08-at-19.28.19.png"
            alt="MRTA Parking"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                MRTA Parking
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Real-time parking management.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faJs} /> JavaScript
                </span>
                <span className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faPython} /> Flask
                </span>
                <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faPython} /> Python
                </span>
              </div>
            </div>
            <a
              href="https://parking.mrta.co.th/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 flex flex-col h-full">
          <img
            src="https://img2.pic.in.th/pic/Screenshot-2568-06-08-at-19.23.06.png"
            alt="iFame Web"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-gray-800 dark:text-gray-100 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                iFame Web – PhillipLife Assurance
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A secure portal for policy & claim management services.
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FontAwesomeIcon icon={faAngular} /> AngularJS
                </span>
              </div>
            </div>
            <a
              href="https://iservice.philliplife.com/ifame/salesupport/content"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-rose-400 via-red-500 to-yellow-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              <FaCarSide className="inline-block w-4 h-4 mr-2" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
