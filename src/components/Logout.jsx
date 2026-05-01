import { useNavigate } from "react-router-dom";
import { LogOutIcon } from "lucide-react";


export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="flex gap-2 h-10 items-center cursor-pointer font-medium border border-[#2e609e] text-[#2e609e] px-4 py-2 rounded hover:opacity-80 hover:bg-gray-50 transition-colors text-sm">
    <LogOutIcon size={17}/>
     გასვლა
    </button>
  );
}