import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions";

export default function MockTest() {
  const navigate = useNavigate();

  const [category, setCategory] = useState("UPSC");
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(60);
  const [showResult, setShowResult] = useState(false);

  // Load questions (with admin)
  useEffect(() => {
    const custom = JSON.parse(localStorage.getItem("customQ")) || [];

    const filtered = [
      ...questionsData.filter((q) => q.category === category),
      ...custom.filter((q) => q.category === category),
    ];

    setQuestions(filtered);
    setAnswers(Array(filtered.length).fill(""));
    setCurrent(0);
    setTime(60);
  }, [category]);

  // Timer
  useEffect(() => {
    if (time > 0 && !showResult) {
      const t = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(t);
    } else if (time === 0) {
      finishTest();
    }
  }, [time, showResult]);

  const selectAnswer = (ans) => {
    const updated = [...answers];
    updated[current] = ans;
    setAnswers(updated);
  };

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      finishTest();
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const finishTest = () => {
    setShowResult(true);

    const score = answers.filter(
      (ans, i) => ans === questions[i]?.answer
    ).length;

    const name = localStorage.getItem("username") || "Guest";

    let prevData = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // Save BEST score only
    const index = prevData.findIndex(
      (p) => p.name === name && p.category === category
    );

    const newEntry = {
      name,
      score,
      total: questions.length,
      category,
      date: new Date().toLocaleString(),
    };

    if (index !== -1) {
      if (score > prevData[index].score) {
        prevData[index] = newEntry;
      }
    } else {
      prevData.push(newEntry);
    }

    localStorage.setItem("leaderboard", JSON.stringify(prevData));
  };

  // RESULT PAGE
  if (showResult) {
    const score = answers.filter(
      (ans, i) => ans === questions[i]?.answer
    ).length;

    return (
      <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-3xl font-bold mb-4 dark:text-white">
            🎉 Test Completed
          </h1>

          <p className="mb-6 text-lg dark:text-white">
            Score: {score} / {questions.length}
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white px-5 py-2 rounded"
            >
              🏠 Home
            </button>

            <button
              onClick={() => navigate("/leaderboard")}
              className="bg-yellow-500 text-white px-5 py-2 rounded"
            >
              🏆 Leaderboard
            </button>
          </div>

          {/* Review */}
          <div className="text-left">
            {questions.map((q, i) => (
              <div key={i} className="mb-4 p-4 border rounded bg-white dark:bg-gray-800">
                <p><b>Q:</b> {q.question}</p>
                <p>Your: {answers[i] || "Not Answered"}</p>
                <p className="text-green-600">Correct: {q.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-4">

      {/* ✅ FIXED CONTAINER */}
      <div className="max-w-5xl mx-auto">

        {/* Top Controls */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-4">

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option>UPSC</option>
            <option>TNPSC</option>
            <option>SSC</option>
          </select>

          <div className="text-red-500 font-bold text-lg">
            ⏱ {time}s
          </div>

          <button
            onClick={() => navigate("/leaderboard")}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            🏆 Leaderboard
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{
              width: `${((current + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        {/* No Questions */}
        {questions.length === 0 && (
          <p className="text-center text-gray-500">
            No questions available
          </p>
        )}

        {/* Question Card */}
        {questions.length > 0 && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">

            <p className="mb-2 text-sm text-gray-500">
              Question {current + 1} / {questions.length}
            </p>

            <h2 className="mb-6 text-lg font-semibold dark:text-white">
              {questions[current].question}
            </h2>

            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(opt)}
                className={`block w-full text-left px-4 py-2 mb-2 rounded border ${
                  answers[current] === opt
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 dark:text-white"
                }`}
              >
                {opt}
              </button>
            ))}

            {/* Navigation */}
            <div className="flex justify-between mt-6">

              <button
                onClick={prev}
                disabled={current === 0}
                className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                Previous
              </button>

              <button
                onClick={next}
                className="bg-green-600 text-white px-6 py-2 rounded"
              >
                {current === questions.length - 1 ? "Finish" : "Next"}
              </button>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}