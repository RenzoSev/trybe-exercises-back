import { recipes, userStatus } from '../services/data';

export const deleteRecipeFromDb = (id: number) => {
  const indexRecipe = recipes.findIndex((recipe) => recipe.id === id);

  if (indexRecipe === -1) return 'error';

  const deletedRecipe = recipes.splice(indexRecipe, 1);

  return deletedRecipe;
};

export const alterRecipeFromDb = (
  id: number,
  recipe: { id: number; name: string; ingredients: string[] }
) => {
  const indexRecipe = recipes.findIndex((recipe) => recipe.id === id);

  if (indexRecipe === -1) return 'error';

  recipes.splice(indexRecipe, 1, recipe);

  return recipes;
};

export const alterUserStatusFromDb = (id: number, status: boolean) => {
  const oldUser = userStatus.find((user) => user.id === id);

  if (!oldUser) return 'error';

  const newUser = { id: oldUser.id, user: oldUser.user, isActive: status };

  const indexUser = userStatus.findIndex((user) => user.id === id);

  userStatus.splice(indexUser, 1, newUser);

  return userStatus;
};

export const removeOrAlterIngredientsFromRecipeDb = (
  id: number,
  remove: string[] | undefined,
  insert: string[] | undefined
) => {
  const recipe = recipes.find((rcp) => rcp.id === id);

  if (!recipe) return 'error';

  const indexRecipe = recipes.findIndex((recipe) => recipe.id === id);

  if (remove) {
    recipe.ingredients = recipe.ingredients.filter(
      (ingr) => !remove.includes(ingr)
    );

    recipes.splice(indexRecipe, 1, recipe);
  }

  if (insert) {
    recipe.ingredients = [...recipe.ingredients, ...insert];

    recipes.splice(indexRecipe, 1, recipe);
  }

  return recipes;
};
