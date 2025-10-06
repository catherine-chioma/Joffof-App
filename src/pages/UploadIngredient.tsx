import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UploadIngredient() {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-6">
      {/* Navigation */}
      <div className="flex gap-4 mb-6">
        <Link
          to="/upload"
          className="px-4 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600"
        >
          Upload Photo
        </Link>
        <Link
          to="/manual"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
        >
          Manual Input
        </Link>
      </div>

      {/* Optional Figma design reference */}
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="800"
        height="450"
        src="https://embed.figma.com/proto/gOdzxibmFDvmpuRpLfGgYc/JollofAi-Hi-Fi-Prototype?node-id=8-2&embed-host=share"
        allowFullScreen
        className="rounded-xl shadow-md mb-8"
      ></iframe>

      {/* Upload Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Upload Ingredient Image
        </h1>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />

        {image && (
          <div className="mt-4">
            <img
              src={image}
              alt="Uploaded Preview"
              className="w-full rounded-lg shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
