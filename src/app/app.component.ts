import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<h1>Angular App Components</h1>

		<h2>Popups</h2>

		<popup
			[title]="'Popup with close button'"
			[close]="true"
		#popup1>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Hic, vel distinctio rerum accusadfntium, molestiae nulla? Debitis, suscipit 
			fuga assumenda deserunt! Minus placeat atque sit eius possimus fuga natus quo aspernatur.
		</popup>

		<popup
			[title]="'Popup without close button'"
		#popup2>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
			Nam blanditiis, quod cupiditate laborum ratione vel aut dicta incidunt, at 
			aperiam nisi earum, similique amet libero quidem quos maiores laboriosam. Eius.
		</popup>

		<button (click)="popup1.openPopup()">Call Popup 1</button>
		<button (click)="popup2.openPopup()">Call Popup 2</button>
	`
})

export class AppComponent {

}