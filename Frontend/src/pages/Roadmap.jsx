import { useParams } from "react-router-dom";
import { useState } from "react";
import examsData from "../data/examsData";

export default function Roadmap() {
  const { id } = useParams();
  const exam = examsData.find((e) => e.id === id);

  const [activeTab, setActiveTab] = useState("overview");

  if (!exam) {
    return (
      <div className="p-10 text-center text-red-600">
        Exam not found.
      </div>
    );
  }

  const tabs = ["overview", "plan", "books", "strategy", "syllabus"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 p-10">

      <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8">
        {exam.name} Roadmap
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 border-b pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-white"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === "overview" && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
          <p>{exam.overview}</p>
        </div>
      )}

      {/* Plan */}
      {activeTab === "plan" && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
            <h3 className="font-semibold mb-3">6 Month Plan</h3>
            <ul className="list-disc pl-5 space-y-2">
              {exam.plan6Months.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
            <h3 className="font-semibold mb-3">1 Year Plan</h3>
            <ul className="list-disc pl-5 space-y-2">
              {exam.plan1Year.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Books */}
      {activeTab === "books" && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
          <ul className="list-disc pl-5 space-y-2">
            {exam.books.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Strategy */}
      {activeTab === "strategy" && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
          <p>{exam.strategy}</p>
        </div>
      )}

      {/* Syllabus */}
        {/* Syllabus */}
{activeTab === "syllabus" && (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow dark:text-white">
    {exam.syllabus && Array.isArray(exam.syllabus) ? (
      <ul className="list-disc pl-5 space-y-2">
        {exam.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>Syllabus not available.</p>
    )}
  </div>
)}

    </div>
  );
}