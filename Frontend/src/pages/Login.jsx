import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/d7/b9/0c/d7b90cc80898e8823455a127945719af.jpg')",
      }}
    >
      <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-full bg-transparent border border-white/30 placeholder-white outline-none"
          />

          <div className="flex justify-between text-sm">
            <label>
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <Link to="#" className="hover:underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Login
          </button>

          <p className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-semibold hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}