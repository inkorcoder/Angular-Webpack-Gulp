import { Component, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'dropdown',
	template: `
		<button class="anchor" (click)="toggleDropdown($event)">{{anchor}}</button>
		<div class="dropdown">
			<ng-content></ng-content>
		</div>
	`,
	host: {
		'[class.block]': 'block',
		'[class.opened]': 'isOpened',
	}
})

export class Dropdown {

	@Input('anchor') anchor: string;
	@Input('block') block: boolean;

	isOpened: boolean;

	constructor(){
		this.isOpened = false;
	}

	toggleDropdown(){
		this.isOpened = !this.isOpened;
	}

}