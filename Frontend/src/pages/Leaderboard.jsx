import { useEffect, useState } from "react";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("leaderboard")) || [];

    // Sort by highest score
    stored.sort((a, b) => b.score - a.score);

    // Top 10 only
    setData(stored.slice(0, 10));
  }, []);

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50 dark:bg-gray-900 px-6 md:px-20 py-10">

      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        🏆 Leaderboard
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">
          No scores yet. Complete a test!
        </p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">

          {data.map((item, i) => {
            const percent = ((item.score / item.total) * 100).toFixed(0);

            return (
              <div
                key={i}
                className={`p-4 rounded-xl shadow flex justify-between items-center ${
                  i === 0
                    ? "bg-yellow-100"
                    : i === 1
                    ? "bg-gray-200"
                    : i === 2
                    ? "bg-orange-100"
                    : "bg-white dark:bg-gray-800"
                }`}
              >
                {/* Rank */}
                <div className="text-xl font-bold w-16">
                  {getMedal(i)}
                </div>

                {/* Name + Category */}
                <div className="flex-1">
                  <p className="font-semibold dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>

                {/* Score */}
                <div className="text-right">
                  <p className="font-bold text-blue-600">
                    {item.score} / {item.total}
                  </p>
                  <p className="text-sm text-gray-500">
                    {percent}%
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      )}
    </div>
  );
}