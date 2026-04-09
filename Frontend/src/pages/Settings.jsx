import Navbar from "../components/Navbar";
import DarkModeToggle from "../components/DarkModeToggle";
// import { useState } from "react";

// export default function Settings() {
//   const [notifications, setNotifications] = useState(true);
//   const [animations, setAnimations] = useState(true);

//   return (
//     <>
//       <Navbar />

//       <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-10">

//         <h1 className="text-3xl font-bold mb-8 dark:text-white">
//           Settings
//         </h1>

//         <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-8">

//           {/* Theme Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-3 dark:text-white">
//               Appearance
//             </h2>
//             <div className="flex items-center justify-between">
//               <span className="dark:text-gray-300">Dark / Light Mode</span>
//               <DarkModeToggle />
//             </div>
//           </div>

//           {/* Notifications */}
//           <div>
//             <h2 className="text-xl font-semibold mb-3 dark:text-white">
//               Notifications
//             </h2>
//             <div className="flex items-center justify-between">
//               <span className="dark:text-gray-300">
//                 Enable Exam Notifications
//               </span>
//               <input
//                 type="checkbox"
//                 checked={notifications}
//                 onChange={() => setNotifications(!notifications)}
//                 className="w-5 h-5"
//               />
//             </div>
//           </div>

//           {/* Animations */}
//           <div>
//             <h2 className="text-xl font-semibold mb-3 dark:text-white">
//               Animations
//             </h2>
//             <div className="flex items-center justify-between">
//               <span className="dark:text-gray-300">
//                 Enable UI Animations
//               </span>
//               <input
//                 type="checkbox"
//                 checked={animations}
//                 onChange={() => setAnimations(!animations)}
//                 className="w-5 h-5"
//               />
//             </div>
//           </div>

//           {/* Future Features Placeholder */}
//           <div>
//             <h2 className="text-xl font-semibold mb-3 dark:text-white">
//               Account
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400">
//               Login / Profile feature coming soon...
//             </p>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }




import { useState, useEffect } from "react";

export default function Settings() {

  // Load saved values from localStorage
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [notifications, setNotifications] = useState(
    localStorage.getItem("notifications") === "true"
  );

  const [animations, setAnimations] = useState(
    localStorage.getItem("animations") !== "false"
  );

  const [accent, setAccent] = useState(
    localStorage.getItem("accent") || "blue"
  );

  // Apply Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Save other settings
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("animations", animations);
  }, [animations]);

  useEffect(() => {
    localStorage.setItem("accent", accent);
  }, [accent]);

  // Reset All Settings
  const resetSettings = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-10">

      <h1 className="text-3xl font-bold mb-10 dark:text-white">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-10 max-w-2xl">

        {/* Appearance */}
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Appearance
          </h2>

          <div className="flex justify-between items-center mb-4">
            <span className="dark:text-gray-300">Dark Mode</span>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                darkMode
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {darkMode ? "ON" : "OFF"}
            </button>
          </div>

          {/* Accent Color */}
          <div className="flex justify-between items-center">
            <span className="dark:text-gray-300">Accent Color</span>
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="px-3 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
            </select>
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Notifications
          </h2>

          <div className="flex justify-between items-center">
            <span className="dark:text-gray-300">
              Enable Exam Notifications
            </span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Animations */}
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Animations
          </h2>

          <div className="flex justify-between items-center">
            <span className="dark:text-gray-300">
              Enable UI Animations
            </span>
            <input
              type="checkbox"
              checked={animations}
              onChange={() => setAnimations(!animations)}
              className="w-5 h-5"
            />
          </div>
        </div>

        {/* Account Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 dark:text-white">
            Account
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Login / Profile feature coming soon...
          </p>
        </div>

        {/* Reset Button */}
        <div className="text-right">
          <button
            onClick={resetSettings}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Reset All Settings
          </button>
        </div>

      </div>
    </div>
  );
}