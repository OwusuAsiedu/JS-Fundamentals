import React from "react";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) {
    return <div>No recipes yet. Add one!</div>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: 12, padding: 12, border: "1px solid #e5e7eb", borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>{recipe.title}</h3>
          <p style={{ margin: "6px 0 0", color: "#6b7280" }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}