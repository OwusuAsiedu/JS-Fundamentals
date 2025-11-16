import create from "zustand";

/**
 * Basic recipe store (no persistence).
 * - recipes: array of recipe objects { id, title, description }
 * - addRecipe: add a new recipe
 * - setRecipes: replace the entire list (for initialization)
 */
export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));