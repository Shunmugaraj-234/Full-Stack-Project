import { useNavigate } from "react-router-dom";

export default function LogoPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600 text-white text-center">

      <img src="/logo.png" alt="logo" className="h-32 w-auto object-contain" />

      <h1 className="text-4xl font-bold mb-4">
        GovExam Roadmap
      </h1>

      <p className="mb-6 max-w-md">
        Your Complete Professional Roadmap for All Government Exams
      </p>

      <button
        onClick={() => navigate("/home")}
        className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Click go to Website
      </button>
    </div>
  );
}