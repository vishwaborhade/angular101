import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Plain Dosa',
      'Plain Dosa Desc',
      '../assets/Plain_Dosa.jpg',
      [
          new Ingredient('Dosa Butter', 20),
          new Ingredient('Oil', 30)
      ]),
    new Recipe('Maysoor Masala Dosa',
      'Maysoor Masala Dosa Desc',
      '../assets/Maysoor_Masala_Dosa.jpg',
      [
          new Ingredient('Dosa Butter', 20),
          new Ingredient('Potato', 5),
          new Ingredient('Masala', 8),
          new Ingredient('Oil', 30)
      ]),
    new Recipe('Paneer Dosa',
      'Paneer Dosa Desc',
      '../assets/Paneer_Dosa.jpg',
      [
          new Ingredient('Dosa Butter', 20),
          new Ingredient('Paneer', 10),
          new Ingredient('Oil', 30)
      ]),
    new Recipe('Uttappam',
      'Uttappam Desc',
      '../assets/Uttapam.jpg',
      [
          new Ingredient('Dosa Butter', 20),
          new Ingredient('Oinion', 3),
          new Ingredient('Vegitables', 6),
          new Ingredient('Oil', 30)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
  	//this.recipes = recipes;
  	//this.recipesChanged.next(this.recipes.slice());
  	console.log(recipes);
  }

  getRecipes() {
    return this.recipes.slice();
    // it will return copy.
  }

  getRecipe(id: number) {
  	return this.recipes[id];
	//return this.recipes.slice()[id];
	// slice will give you copy of array.  
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  
  addRecipe(recipe: Recipe) {
  	this.recipes.push(recipe);
  	this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number, newRecipe: Recipe) {
  	this.recipes[index] = newRecipe;
  	this.recipesChanged.next(this.recipes.slice());
  }
  
  deleteRecipe(index: number) {
	this.recipes.splice(index, 1);
	this.recipesChanged.next(this.recipes.slice());
  }
  
}
