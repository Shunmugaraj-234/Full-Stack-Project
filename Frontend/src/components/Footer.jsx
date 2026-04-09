import React from "react";
import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-semibold mb-4">
          GovExam Roadmap
        </h2>

        <p className="text-gray-300 mb-6">
          Your complete preparation guide for all State & Central Government Exams.
        </p>

        {/* Contact Info */}
        <div className="mb-6 space-y-2">
          <p>📧 shanmugarajr007@gmail.com</p>
          <p>📞 +91 9344359656</p>
          <p>📍 Tamil Nadu, India</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">

          <a href="https://www.linkedin.com/in/shunmugaraj-r-089372355" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <Linkedin size={24} />
          </a>

          <a href="https://www.instagram.com/ittz_me_danger_?igsh=MXUyMXpqbmluMjNuYg==" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <Instagram size={24} />
          </a>

          <a href="https://www.facebook.com/share/189jfaVURG/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <Facebook size={24} />
          </a>

          <a href="https://github.com/Shunmugaraj-234" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            <Github size={24} />
          </a>

        </div>

        <p className="text-sm text-gray-400">
          © 2026 GovExam Roadmap. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;