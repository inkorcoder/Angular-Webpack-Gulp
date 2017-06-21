import { Component, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'popup',
	template: `
		<div class="inner">
			<div class="head">{{title}}</div>
			<button type="button" class="popup-close" *ngIf="close" (click)="closePopup($event)">&times;</button>
			<ng-content></ng-content>
		</div>
		<div class="fader" (click)="closePopup($event)"></div>
	`,
	host: {
		'[class.shows]': 'isShows',
		'[class.opened]': 'isOpened'
	}
})

export class Popup {

	@Input('title') title: string;
	@Input('close') close: boolean;

	isOpened: boolean;
	isShows: boolean;

	constructor(){
		this.isOpened = false;
		this.isShows = false;
	}

	openPopup(){
		this.isShows = true;
		setTimeout(()=> { this.isOpened = true }, 3);
	}

	closePopup(event?: Event){
		if (event){
			event.preventDefault();
		}
		this.isOpened = false;
		setTimeout(()=> { this.isShows = false }, 301);
	}

}