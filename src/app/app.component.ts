import { Component, HostBinding, ViewChildren, QueryList } from '@angular/core';
import { Dropdown } from './components/dropdown';
import { closest } from './helpers';

@Component({
	selector: 'app',
	template: `
		<div class="container">

			<h1>Angular App Components</h1>

			<br>
			<h2>Dropdowns</h2>

			<div class="row">
				<div class="col-xs-6">
					<h3>simple dropdown</h3>
					<dropdown [anchor]="'Dropdown one'">
						<ul class="clear">
							<li><a href="#">link in dropdown number 1</a></li>
							<li><a href="#">link in dropdown number 2</a></li>
							<li><a href="#">link in dropdown number 3</a></li>
						</ul>
					</dropdown>
				</div>
				<div class="col-xs-6">
					<h3>block dropdown</h3>
					<dropdown [anchor]="'Dropdown two'" [block]="true">
						<ul class="clear">
							<li><a href="#">link in dropdown number 1</a></li>
							<li><a href="#">link in dropdown number 2</a></li>
							<li><a href="#">link in dropdown number 3</a></li>
						</ul>
					</dropdown>
				</div>
			</div>

			<br>
			<h2>Tabs</h2>
			<tabs>
				<div class="tab" [class.active]="activeTab === 0">1</div>
				<div class="tab" [class.active]="activeTab === 1">2</div>
				<div class="tab" [class.active]="activeTab === 2">3</div>
			</tabs>


			<br>
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

		</div>
	`,
	host: {
		'(click)': 'hideDropdowns($event)'
	}
})

export class AppComponent {

	@ViewChildren(Dropdown) dropdowns: QueryList<Dropdown>;

	closest: Function;

	constructor(){
		this.closest = closest;
	}

	hideDropdowns(event?: Event){
		var node = event.target;

		if (this.closest(node, 'dropdown')){
			return;
		} else {
			this.dropdowns.map((dropdown: any, index: number)=> {
				dropdown.isOpened = false;
			});
		}

	}

}