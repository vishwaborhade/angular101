//import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
//  ingredientChanged = new EventEmitter<Ingredient[]>();
	ingredientChanged = new Subject<Ingredient[]>();
	startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Rice', 20),
    new Ingredient('Urad Daal', 150),
    new Ingredient('Coccunuts', 10),
    new Ingredient('Sunflower Oil', 180)
  ];

  getIngerdients() {
    return this.ingredients.slice();
  }
  
  getIngredient(index: number) {
  	return this.ingredients[index];
  }

  addIngredient(ingr: Ingredient) {
    this.ingredients.push(ingr);
    //this.ingredientChanged.emit(this.ingredients.slice());
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredts: Ingredient[]) {
//    for(let ingredient of ingredts) {
//      this.addIngredient(ingredient);
//    }
    this.ingredients.push(...ingredts);
//  this.ingredientChanged.emit(this.ingredients.slice());
	this.ingredientChanged.next(this.ingredients.slice());
  }
  
  updateIngredient(index: number, newIngr: Ingredient) {
  	this.ingredients[index] = newIngr;
  	this.ingredientChanged.next(this.ingredients.slice()); // Emit ingredient.
  }
  
  deleteIngredient(index: number) {
  	this.ingredients.splice(index, 1);
  	this.ingredientChanged.next(this.ingredients.slice());
  }
}
