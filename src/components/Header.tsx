import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    location.pathname === path
      ? "text-white bg-blue-600 px-4 py-2 rounded"
      : "text-blue-600 hover:text-white hover:bg-blue-500 px-4 py-2 rounded transition";

  return (
    <header className="bg-gray-100 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">MyApp</h1>
        <div className="flex gap-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClass("/about")}>
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
