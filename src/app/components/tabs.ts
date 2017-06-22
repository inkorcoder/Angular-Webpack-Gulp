import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
	selector: 'tabs',
	template: `
		<ul class="clear tabs-nav">
			<li
				*ngFor="let anchor of anchors; let i = index"
				(click)="setActiveTab($event, i)"
				[class.active]="activeTab === i"
			>{{anchor}}</li>
		</ul>
		<ng-content></ng-content>
	`,
	host: {
	}
})

export class Tabs {

	@Input('activeTab') activeTab: number;
	@Input('anchors') anchors: any;

	tabs: Element[] = [];

	constructor(private el: ElementRef){
		if (!this.activeTab)
			this.activeTab = 0;
	}

	ngAfterContentInit() {

		[].map.call(this.el.nativeElement.children, (node: Element)=> {
			if (node.matches('.tab')) {
				this.tabs.push(node);
			}
		});
	}

	ngAfterViewInit(){
		this.setTabs()
	}

	setActiveTab(event: Event, tab: number) {
		this.activeTab = tab;
		this.setTabs()
	}

	setTabs(){
		this.tabs.forEach((tab, index)=> {
			index === this.activeTab ? tab.classList.add('active') : tab.classList.remove('active');
		});
	}


}