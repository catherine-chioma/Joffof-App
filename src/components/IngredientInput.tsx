import { useState } from "react";

export default function IngredientInput() {
  const [input, setInput] = useState(""); // Current typed value
  const [ingredients, setIngredients] = useState<string[]>([]); // List of ingredients

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed && !ingredients.includes(trimmed)) {
      setIngredients([...ingredients, trimmed]);
      setInput("");
    }
  };

  const handleRemove = (item: string) => {
    setIngredients(ingredients.filter((ing) => ing !== item));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Enter Ingredients</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type an ingredient"
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {ingredients.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-2 rounded"
          >
            <span>{item}</span>
            <button
              onClick={() => handleRemove(item)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
