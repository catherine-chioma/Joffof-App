
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ManualIngredientInput() {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = () => {
    if (!input.trim()) return;

    const newIngredients = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    setIngredients([...ingredients, ...newIngredients]);
    setInput("");
  };

  const handleExport = () => {
    const csv = ingredients.join(", ");
    navigator.clipboard.writeText(csv);
    alert("Ingredients copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6">
      {/* Navigation */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/upload"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
        >
          Upload Photo
        </Link>
        <Link
          to="/manual"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
        >
          Manual Input
        </Link>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Manual Input
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Type ingredient and press <b>Enter</b> or click <b>Add</b>.<br />
          You can paste comma-separated values.
        </p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. Rice, Tomato, Pepper"
            className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleAddIngredient()}
          />
          <button
            onClick={handleAddIngredient}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Add
          </button>
        </div>

        <h2 className="font-semibold mb-2 text-gray-700">Ingredients</h2>
        {ingredients.length > 0 ? (
          <ul className="flex flex-wrap gap-2 mb-4">
            {ingredients.map((ing, i) => (
              <li
                key={i}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm"
              >
                {ing}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 mb-4">No ingredients yet.</p>
        )}

        <button
          onClick={handleExport}
          disabled={ingredients.length === 0}
          className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition disabled:opacity-50"
        >
          Export (comma-separated)
        </button>
      </div>
    </div>
  );
}
