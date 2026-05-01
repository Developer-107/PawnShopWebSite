import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "@/api/axios";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/admin");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="flex flex-col w-84 gap-2">
        <div className="w-full flex font-medium md:text-xl text-[16px] justify-center text-[#2f62a1]">
          {" "}
          ანგარიშში შესვლა{" "}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center mt-4 gap-2"
        >
          <input
            type="email"
            placeholder="იმეილი"
            className="loginStyle w-full h-10 border rounded border-gray-200! px-4 p-1 md:text-sm text-xs"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative w-full mt-1">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="პაროლი"
              className="loginStyle w-full h-10 border rounded border-gray-200! px-4 p-1 md:text-sm text-xs"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(() => !showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm pr-1 cursor-pointer"
            >
              {showPassword ? (
                <EyeOff strokeWidth={1.25} color="#2f62a1" />
              ) : (
                <Eye strokeWidth={1.25} color="#2f62a1" />
              )}
            </button>
          </div>

          {error && (
            <p className="text-xs self-start" style={{ color: "#db2e3a" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className="flex mt-2 w-full h-10 rounded-4xl bg-white text-[#2f62a1] border border-[#2f62a1] font-semibold justify-center items-center hover:bg-[#2f62a1] hover:text-white transition cursor-pointer md:text-sm text-xs"
          >
            შესვლა
          </button>
        </form>
      </div>
    </div>
  );
}
