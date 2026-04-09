import { NavLink } from "react-router-dom";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1"
      : "hover:text-blue-600 dark:hover:text-blue-400 transition";

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="GovExam Roadmap" className="h-12 w-auto" />
          <span className="font-bold text-blue-900 dark:text-white text-lg hidden md:block">
            GovExam Roadmap
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/exams" className={navLinkClass}>Exams</NavLink>
          <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/leaderboard" className={navLinkClass}>Leaderboard</NavLink>
          <NavLink to="/admin" className={navLinkClass}>Admin</NavLink>
          <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
          <NavLink to="/login" className={navLinkClass}>Login</NavLink>
          {/* <DarkModeToggle /> */}
        </div>

        {/* Mobile Section */}
        {/* <div className="md:hidden flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl"
          >
            ☰
          </button>
        </div> */}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-6 pb-4 space-y-3 shadow-md">
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block">Home</NavLink>
          <NavLink to="/exams" onClick={() => setIsOpen(false)} className="block">Exams</NavLink>
          <NavLink to="/resources" onClick={() => setIsOpen(false)} className="block">Resources</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className="block">About</NavLink>
          <NavLink to="/leaderboard" onClick={() => setIsOpen(false)} className="block">Leaderboard</NavLink>
          <NavLink to="/admin" onClick={() => setIsOpen(false)} className="block">Admin</NavLink>
          <NavLink to="/settings" onClick={() => setIsOpen(false)} className="block">Settings</NavLink>
        </div>
      )}
    </nav>
  );
}