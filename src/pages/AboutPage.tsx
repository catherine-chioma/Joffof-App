import React from "react";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          About This App
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Welcome! This application is built using <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, <strong>Vite</strong>, and{" "}
          <strong>TailwindCSS</strong>. It demonstrates modern frontend
          development techniques, responsive design, and clean UI components.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
