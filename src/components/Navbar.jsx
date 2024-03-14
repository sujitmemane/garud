import React, { useContext } from "react";
import Logo from "../assets/logo.png";
import { AppContext } from "../context/AppContextProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, setUser, setAuth } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex items-center md:px-14 py-3  justify-between">
      <img src={Logo} alt="" className="h-16" />
      <ul className="flex items-center space-x-4">
        <li className="font-semibold underline">Search Bus Routes</li>
        <li className="font-semibold underline">View Bus Location</li>
        <li className="font-semibold underline">Receive Bus Notification</li>
      </ul>
      <div className="flex items-center space-x-4">
        {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA9xigeDoxyoxJSqrYvuLE0TMjWPqqYNPsg&usqp=CAU"
          alt=""
          className="h-12 w-12 border-4 border-gray-900 rounded-full"
        /> */}
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-gray-900 underline">
            {user?.email.split("@")[0].toUpperCase()}
          </p>
        </div>
        <button
          onClick={() => {
            setUser(null);
            setAuth(false);
            navigate("/");
          }}
          className="px-4 py-1 rounded bg-black text-white font-bold"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
