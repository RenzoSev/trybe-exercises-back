import { recipes } from '../services/data';

export const deleteRecipeFromDb = (id: number) => {
  const indexRecipe = recipes.findIndex((recipe) => recipe.id === id);

  if (indexRecipe === -1) return 'error';

  const deletedRecipe = recipes.splice(indexRecipe, 1);

  return deletedRecipe;
};
