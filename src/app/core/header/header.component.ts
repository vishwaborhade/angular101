import { Component, Output, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
	constructor(private dts: DataStorageService, private authService: AuthService) {}
	
	onSaveData() {
		this.dts.storeRecipes()
			.subscribe(
				(rsp: Response) => {
					console.log(rsp);
				}
			);
	}	
	
	onFetchData() {
		this.dts.getRecipes();
	}
	
	onLogout() {
		this.authService.logout();
	}
}
