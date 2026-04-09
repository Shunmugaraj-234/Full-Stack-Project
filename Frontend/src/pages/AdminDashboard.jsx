import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("UPSC");
  const [questions, setQuestions] = useState([]);

  // Load questions
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customQ")) || [];
    setQuestions(stored);
  }, []);

  // Save questions
  useEffect(() => {
    localStorage.setItem("customQ", JSON.stringify(questions));
  }, [questions]);

  // Handle option change
  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  // Add Question
  const addQuestion = () => {
    if (!question || options.includes("") || !answer) {
      alert("⚠️ Fill all fields!");
      return;
    }

    const newQ = {
      id: Date.now(),
      category,
      question,
      options,
      answer,
    };

    setQuestions([...questions, newQ]);

    // Reset
    setQuestion("");
    setOptions(["", "", "", ""]);
    setAnswer("");

    alert("✅ Question Added Successfully!");
  };

  // Delete question
  const deleteQuestion = (id) => {
    const updated = questions.filter((q) => q.id !== id);
    setQuestions(updated);
  };

  // Clear all
  const clearAll = () => {
    if (window.confirm("Are you sure to delete all questions?")) {
      setQuestions([]);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-10">

      <h1 className="text-3xl font-bold mb-8 dark:text-white">
        Admin Dashboard ⚙️
      </h1>

      {/* ADD QUESTION */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">
          Add New Question
        </h2>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        >
          <option>UPSC</option>
          <option>TNPSC</option>
          <option>SSC</option>
        </select>

        {/* Question */}
        <input
          type="text"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        {/* Options */}
        {options.map((opt, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={opt}
            onChange={(e) => handleOptionChange(index, e.target.value)}
            className="w-full mb-2 px-4 py-2 border rounded-lg"
          />
        ))}

        {/* Answer */}
        <input
          type="text"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <button
          onClick={addQuestion}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
        >
          Add Question
        </button>
      </div>

      {/* QUESTION LIST */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold dark:text-white">
            All Questions
          </h2>

          <button
            onClick={clearAll}
            className="bg-red-500 text-white px-4 py-1 rounded"
          >
            Clear All
          </button>
        </div>

        {questions.length === 0 ? (
          <p className="text-gray-500">No questions added</p>
        ) : (
          <div className="space-y-4">
            {questions.map((q) => (
              <div
                key={q.id}
                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg"
              >
                <p className="font-semibold dark:text-white">
                  {q.question}
                </p>

                <ul className="list-disc pl-5 text-sm dark:text-gray-300">
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>

                <p className="text-green-600 mt-2">
                  ✔ Answer: {q.answer}
                </p>

                <p className="text-xs text-gray-500">
                  Category: {q.category}
                </p>

                <button
                  onClick={() => deleteQuestion(q.id)}
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}