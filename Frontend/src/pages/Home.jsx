import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">

      {/* HERO */}
      <section className="text-center px-6 py-24 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Crack Government Exams with the Right Roadmap
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Structured preparation strategies, exam guidance, and curated resources
          to help you succeed in UPSC, SSC, Banking, TNPSC, and more.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/exams")}
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Explore Exams
          </button>

          <button
            onClick={() => navigate("/mock-test")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Mock Test 🚀
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white dark:bg-gray-800 text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
            <p className="dark:text-gray-300">Students Learning</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">500+</h2>
            <p className="dark:text-gray-300">Questions Available</p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600">95%</h2>
            <p className="dark:text-gray-300">Success Rate</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Why Choose GovExam Roadmap?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              📚 Smart Study Plan
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Daily, weekly, and monthly preparation strategies.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              🧠 Mock Tests
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Real exam-like tests with leaderboard system.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              📊 Performance Tracking
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Analyze your score and improve weak areas.
            </p>
          </div>
        </div>
      </section>

      {/* EXAM CATEGORIES */}
      <section className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Exam Categories
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              Central Exams
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              UPSC, SSC, Banking, Railways.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              State Exams
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              TNPSC, KPSC, APPSC.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              Roadmaps
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              6-month & 1-year plans.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
            alt="Students studying"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Smart Preparation Strategy
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Success requires smart work, not just hard work.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Track progress, practice daily, and stay consistent.
            </p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12 dark:text-white">
          What Students Say
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="card">
            <p>"Best platform for exam prep!"</p>
            <h4 className="mt-4 font-semibold">- Raj</h4>
          </div>

          <div className="card">
            <p>"Mock tests helped me a lot."</p>
            <h4 className="mt-4 font-semibold">- Priya</h4>
          </div>

          <div className="card">
            <p>"Very structured and easy to follow."</p>
            <h4 className="mt-4 font-semibold">- Arun</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Start Your Preparation Today
        </h2>

        <p className="mb-8">
          Don't wait. Begin your journey now 🚀
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/mock-test")}
            className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold"
          >
            Start Mock Test
          </button>

          <Link to="/resources">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold">
              Free Resources
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}