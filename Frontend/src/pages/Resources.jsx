import React from "react";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 p-10">

      <div className="max-w-6xl mx-auto">



        {/* Page Title */}
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Free Preparation Resources
        </h1>

        {/* Resource Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">

          <Link to="/previous-papers">
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer">
    <h3 className="text-xl font-semibold mb-2 dark:text-white">
      Previous Year Question Papers
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      Download PYQs for SSC, UPSC, Banking & Railway exams.
    </p>
  </div>
</Link>

 

          <div className="card">
            <h3 className="text-xl font-semibold">
              Free Mock Test Platforms
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Practice online mock tests to improve accuracy and speed.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">
              Daily Current Affairs
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Stay updated with daily news important for exams.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">
              Preparation Strategy Videos
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Smart preparation tips from experienced educators.
            </p>
          </div>

        </div>

        {/* YouTube Section */}
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-6 text-primary text-center">
            Recommended YouTube Channels
          </h2>

          <ul className="space-y-4">

            <li className="card">
              <a 
                href="https://www.youtube.com/@StudyIQEducationLtd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                Study IQ Education
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Current Affairs & UPSC Preparation
              </p>
            </li>

            <li className="card">
              <a 
                href="https://www.youtube.com/@Adda247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                Adda247
              </a>
              <p className="text-sm text-gray-500 mt-1">
                SSC, Banking, Railway Exams
              </p>
            </li>

            <li className="card">
              <a 
                href="https://www.youtube.com/@Unacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                Unacademy
              </a>
              <p className="text-sm text-gray-500 mt-1">
                Government Exam Strategy & Live Classes
              </p>
            </li>
            <li className="card">
              <a 
                href="https://www.youtube.com/@UPSCTAMIL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                UPSC TAMIL
              </a>
              <p className="text-sm text-gray-500 mt-1">
                UPSC Preparation in Tamil
              </p>
            </li>
            <li className="card">
              <a 
                href="https://www.youtube.com/@NeoRotex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                NeoRotex Academy
              </a>
              <p className="text-sm text-gray-500 mt-1">
                TNPSC Preparation Exams
              </p>
            </li>
            <li className="card">
              <a 
                href="https://www.youtube.com/@aicscctn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                AICSCC TN
              </a>
              <p className="text-sm text-gray-500 mt-1">
                UPSC Preparation in english
              </p>
            </li>
            <li className="card">
              <a 
                href="https://www.youtube.com/@pwonlyiashindimedium"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-semibold text-lg"
              >
                PW Only IAS Hindi Medium
              </a>
              <p className="text-sm text-gray-500 mt-1">
                UPSC Preparation in Hindi
              </p>
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Resources;