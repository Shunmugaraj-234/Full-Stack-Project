import { useState } from "react";
import Navbar from "../components/Navbar";
import ExamCard from "../components/ExamCard";
import examsData from "../data/examsData";

export default function Exams() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredExams = examsData.filter((exam) => {
    return (
      exam.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "All" || exam.category === filter)
    );
  });

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-24 p-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Explore Government Exams
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Search exam..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full md:w-1/3"
          />

          <select
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="All">All</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
          </select>
        </div>

        {/* Exam Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </>
  );
}