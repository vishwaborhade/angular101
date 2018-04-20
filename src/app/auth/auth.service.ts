//import * as firebase from 'firebase'; //import everything from firebase.
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
	token: string;

  constructor(private router: Router) { }

  singupUser(email: string, password: string) {
  	/* // This is promise so you need to listen to it.
  	   firebase.auth().createUserWithEmailAndPassword(email, password) 
          .catch(
             error => console.log(error)
          )  		
  	*/
  }
  
  singinUser(email: string, password: string) {
  	/*
  		firebase.auth().signInWithEmailAndPassword(email, password)
  		  .then(
  		  	response => { console.log(response);
  		  		this.router.navigte(['/']);// redirect to the root page. 
				firebase.auth().currentUser.getToken()
					.then (
						(token: string) => this.token = token;
					)
			}  		  	
  		  )
  		  .catch(
             error => console.log(error)
          );
  	*/
  }

  getToken() {
  	// return firebase.auth().currentUset.getToken();
  	// This is an asynchronous action.
  	/*
  	firebase.auth().currentUser.getToken()
		.then (
			(token: string) => this.token = token;
		);
	return this.token;
  	*/ 
  }
  
  isAuthenticated() {
  	//return this.token != null; // Actual commented because we not usign firebase. 
  	return this.token == null;
  }
  
  logout() {
  	// firebase.auth().singOut();
  	this.token = null;
  }
	
}