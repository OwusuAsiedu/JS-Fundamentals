import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Recipe Sharing App (Zustand)</h1>
        <p style={{ color: "#6b7280" }}>Add and display recipes using Zustand state.</p>

        <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
          <div style={{ flex: 1 }}>
            <AddRecipeForm />
          </div>
          <div style={{ flex: 2 }}>
            <RecipeList />
          </div>
        </div>
      </div>
    </div>
  );
}