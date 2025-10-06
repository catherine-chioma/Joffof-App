import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadIngredient from "./pages/UploadIngredient";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="p-4 bg-white shadow-sm flex gap-4 justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-600 underline" : "text-indigo-600 hover:underline"
              }`
            }
          >
            Manual Input
          </NavLink>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              `font-medium ${
                isActive ? "text-orange-600 underline" : "text-indigo-600 hover:underline"
              }`
            }
          >
            Upload Photo
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadIngredient />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


