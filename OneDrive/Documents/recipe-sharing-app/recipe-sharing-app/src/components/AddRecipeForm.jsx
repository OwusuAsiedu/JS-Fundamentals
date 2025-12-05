import React, { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      alert("Please enter a title");
      return;
    }

    addRecipe({
      id: Date.now().toString(),
      title: trimmedTitle,
      description: description.trim(),
    });

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <label>
        <div style={{ fontSize: 13, color: "#374151" }}>Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe title" style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }} />
      </label>

      <label>
        <div style={{ fontSize: 13, color: "#374151" }}>Description</div>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Short description" rows={6} style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }} />
      </label>

      <div>
        <button type="submit" style={{ padding: "8px 12px", background: "#2563eb", color: "white", border: "none", borderRadius: 6 }}>Add Recipe</button>
      </div>
    </form>
  );
}