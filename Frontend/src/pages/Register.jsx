import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg')",
      }}
    >
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">Register</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}