import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service'; 

@Injectable()
export class DataStorageService {
	constructor(private httpClient: HttpClient, 
		private recipeService: RecipeService,
		private authService: AuthService) {}
	
	storeRecipes() {
		// const token = this.authService.getToken();
		// return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
		return this.httpClient.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes());
	}
	
	getRecipes() {
		console.log('Calling URL');
		
		return this.httpClient.get<Recipe[]>('http://localhost:8080/loginApp')
			.subscribe((recipes) => {
	      		console.log('Return Data: ' + recipes);
	    });
	    
		// Working
		//	return this.httpClient.get<Recipes[]>('http://localhost:8080/Fashion-Designer/loginDetail.json')
		//	.subscribe((recipes) => {
	    //  		console.log('Return Data: ' + data);
	    //	});
		/* Working gives actual JSON data.
		return this.httpClient.get<Recipe[]>('http://localhost:8080/FashionDesinger/loginDetail')
		.map((recipes) => data.json())
		.subscribe((data: any) => {
      		console.log('Return Data: ' + JSON.stringify(data));
    	});
	*/
	/* Working gives actual JSON data.
		return this.httpClient.get<Recipe[]>('http://localhost:8080/FashionDesinger/loginDetail', { observe: 'body', responseType: 'json'})
		.map((recipes) => console.log(recipes);)
		.subscribe((data: any) => {
      		console.log('Return Data: ' + JSON.stringify(data));
    	});
	*/
	}
/*	
	getRecipes() {
		const token = this.authService.getToken();
		
		this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json?auth='+token)
			.map(
				(rsp: Response) => {
					const recipes: Recipe[] = rsp.json();
					for(let recipe of recipes) {
						if(!recipe['ingredient']) {
							recipe['ingredient'] = [];//In case we don't have ingredient but we have property.
						}
					}
					return recipes;
				}
			)
			.subscribe(
				//(rsp: Response) => {
				//	const recipes: Recipe[] = rsp.json();
				//	this.recipeService.setRecipes(recipes);
				//},
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				},
				(error: Response) => {
					//return Observable.throw(error);
					console.log('>>>>>>>>>>>>> error');
					return Observable.throw('Wrong URL');
				}				
			);
	}
	*/
}