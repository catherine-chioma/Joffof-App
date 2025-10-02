iimport React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="mb-6 text-lg">This is the homepage of your React app.</p>
    </div>
  );
};

export default HomePage;
