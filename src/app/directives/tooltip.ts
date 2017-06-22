import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
	selector: '[tooltip]',
	host: {
		'(mouseenter)': 'mouseEnter()'
	}
})

export class TooltipDirective {

	@Input() tooltip: string;
	@Input() origin: string;

	node: Element;
	span: HTMLSpanElement;

	constructor(el: ElementRef) {
		this.node = el.nativeElement;
	}

	ngOnInit(){
		this.span = document.createElement('span');
		this.span.innerHTML = this.tooltip;
		this.span.className = 'tooltip';
		this.node.appendChild(this.span);
		if (!this.origin)
			this.origin = 'top';
	}

	mouseEnter(){
		switch (this.origin) {
			case "down":
				this.span.style.marginLeft = '-'+(this.span.getBoundingClientRect().width / 2) + 'px';
				break;
			case "left":
				this.span.style.marginTop = '-'+(this.span.getBoundingClientRect().height / 2) + 'px';
				break;
			case "right":
				this.span.style.marginTop = '-'+(this.span.getBoundingClientRect().height / 2) + 'px';
				break;
			default:
				this.span.style.marginLeft = '-'+(this.span.getBoundingClientRect().width / 2) + 'px';
				break;
		}
	}


}