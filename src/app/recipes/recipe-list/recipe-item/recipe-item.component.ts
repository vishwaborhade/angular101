import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // To get the data from outside. recipe is here for data binding in Recipe list component.
  @Input() recipe: Recipe;
  @Input() id: number;
  
 // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

//  onSelected() {
//    this.recipeService.recipeSelected.emit(this.recipe);
//  }

}
