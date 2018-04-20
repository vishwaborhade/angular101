import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amtInputRef: ElementRef;
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false; 
  editedItemIndex: number;
  editedItem: Ingredient; 

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  	this.subscription = this.slService.startEditing
  		.subscribe(
  			(index: number) => {
  				this.editedItemIndex = index;
  				this.editMode = true;
  				this.editedItem = this.slService.getIngredient(index);
  				this.slForm.setValue({
  					name: this.editedItem.name,
  					amount: this.editedItem.amount
  				});
  			}
  		);
  }

  onSubmit(form: NgForm) {
    //const ingName = this.nameInputRef.nativeElement.value;
    //const ingAmt = this.amtInputRef.nativeElement.value;
    //const newIngredient = new Ingredient(ingName, ingAmt);
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    
    if(this.editMode) {
    	this.slService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
    	 this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }
  
  onDelete(){
  	this.slService.deleteIngredient(this.editedItemIndex);
  	this.onClear();
  }
  
  onClear()  {
  	this.editMode = false;
    this.slForm.reset();
  }
  
  ngOnDetroy(){
  	this.subscription.unsubscribe();
  }

}
