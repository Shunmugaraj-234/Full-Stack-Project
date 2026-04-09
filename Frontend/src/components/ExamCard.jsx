import { useNavigate } from "react-router-dom";

export default function ExamCard({ exam }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/roadmap/${exam.id}`)}
      className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:scale-105 transition duration-300"
    >
      <h3 className="text-xl font-bold text-blue-900 mb-2">
        {exam.name}
      </h3>

      <p className="text-sm text-gray-500 mb-1">
        Category: {exam.category}
      </p>

      <p className="text-sm text-gray-500 mb-1">
        Type: {exam.type}
      </p>

      <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
        {exam.difficulty}
      </span>
    </div>
  );
}