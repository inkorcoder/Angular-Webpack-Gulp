import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
	selector: 'tabs',
	template: `
		<ul class="clear tabs-nav">
			<li (click)="setActiveTab($event, 0)">tab 1</li>
			<li (click)="setActiveTab($event, 1)">tab 2</li>
			<li (click)="setActiveTab($event, 2)">tab 3</li>
		</ul>
		<ng-content></ng-content>
	`,
	host: {
	}
})

export class Tabs {

	activeTab: number;

	constructor(el: ElementRef){
		this.activeTab = 0;
	}

	setActiveTab(event: Event, tab: number) {
		this.activeTab = tab;
		let anchor: any = event.target;
		let tabs: any = [].slice.call(anchor.parentNode.parentNode.querySelectorAll('.tab'));
		console.log(tabs)
	}

	setTabs(){

	}


}