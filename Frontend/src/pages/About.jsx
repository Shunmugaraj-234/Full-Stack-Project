import { useState } from "react";
import emailjs from "emailjs-com";

export default function About() {
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.name || !form.email || !form.message) {
      alert("⚠️ Please fill all fields");
      return;
    }

    // ✅ Send Email
    emailjs.send(
      "service_fe1oa1|",
      "template_ynmwea5",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "791-xfeZ-95byA8SU"
    )
    .then(() => {
      alert("✅ Message Sent Successfully!");
      setForm({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("❌ Failed to send message");
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 p-10">

      <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-10">
        About GovExam Roadmap
      </h2>

      {/* Top Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">

        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            🎯 Our Mission
          </h3>
          <p className="dark:text-gray-300">
            To provide structured preparation roadmaps for Central and State government exams in one place.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            🚀 Our Vision
          </h3>
          <p className="dark:text-gray-300">
            To become the most trusted exam preparation guidance platform for aspirants across India.
          </p>
        </div>

        {/* What We Provide */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-3 dark:text-white">
            📚 What We Provide
          </h3>
          <ul className="list-disc pl-5 dark:text-gray-300 space-y-2">
            <li>Structured Preparation Plans</li>
            <li>Recommended Books</li>
            <li>Exam Strategy</li>
            <li>Detailed Syllabus</li>
          </ul>
        </div>

      </div>

      {/* Contact Section */}
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 mb-16 dark:text-white">
        <h2 className="text-2xl font-bold mb-6">
          📞 Contact Information
        </h2>

        <p className="mb-2">
          📧 Email: shanmugarajr007@gmail.com
        </p>

        <p className="mb-2">
          📞 Phone: +91 9344359656
        </p>

        <p className="mb-2">
          📍 Location: Tamil Nadu, India
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow mb-16">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        📩 Send Message
      </h2>

      <form onSubmit={sendEmail} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition"
        >
          Send Message
        </button>

      </form>
    </div>

      {/* Bottom CTA */}
      <div className="bg-blue-600 text-white p-10 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">
          Start Your Preparation Today
        </h3>
        <p>
          Choose your exam roadmap and begin your success journey with confidence.
        </p>
      </div>
      

    </div>
  );
}