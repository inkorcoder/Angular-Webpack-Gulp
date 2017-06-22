import { Component, Input, HostBinding, ElementRef } from '@angular/core';

@Component({
	selector: 'accordeon',
	template: `
		<ng-content></ng-content>
	`,
	host: {
	}
})

export class Accordeon {

	@Input('anchors') anchors: any;

	content: Element[] = [];
	activeAnchor: number;

	constructor(private el: ElementRef){
		if (!this.activeAnchor)
			this.activeAnchor = 0;
	}

	ngAfterContentInit() {
		[].map.call(this.el.nativeElement.children, (node: any, index: number)=> {
			if (node.matches('.content')) {
				this.content.push(node);
				// let anchor = document.createElement('button');
				// anchor.innerHTML = this.anchors[index];
				// anchor.addEventListener('click', (e: Event)=> {
				// 	this.activeAnchor = index;
				// 	this.setActive();
				// });
				// node.parentNode.insertBefore(anchor, node.nextSibling);
			}
		});
		this.setActive()
	}

	setActive(){
		this.content.forEach((content, index)=> {
			index === this.activeAnchor ? content.classList.add('active') : content.classList.remove('active');
		});
	}

}