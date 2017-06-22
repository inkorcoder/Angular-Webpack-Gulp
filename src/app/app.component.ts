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
			<div class="row">
				<div class="col-xs-6">
					<tabs [anchors]="[
						'flower', 'tree', 'panda'
					]">
						<div class="tab">
							<h4>flower</h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rerum sed eligendi suscipit ullam cumque facilis dolorum, voluptas quo. Quos, unde. Aspernatur laboriosam placeat autem doloremque architecto ex sit a.
						</div>
						<div class="tab">
							<h4>tree</h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas fuga asperiores optio assumenda veritatis iusto minus sequi, architecto quibusdam voluptatem porro accusamus obcaecati vitae eligendi suscipit commodi laudantium, vel.
						</div>
						<div class="tab">
							<h4>panda</h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis veritatis cum placeat voluptas, repellendus similique eius hic animi blanditiis eligendi suscipit laborum fugit nisi sapiente non quo molestias enim aliquam.
						</div>
					</tabs>
				</div>
				<div class="col-xs-6">
					<tabs [anchors]="[
						'Tab 1 title', 'Tab 2 content'
					]" [activeTab]="1">
						<div class="tab">
							<h4>Tab 1 title</h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore rerum sed eligendi suscipit ullam cumque facilis dolorum, voluptas quo. Quos, unde. Aspernatur laboriosam placeat autem doloremque architecto ex sit a.
						</div>
						<div class="tab">
							<h4>Tab 2 active by default</h4>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quas fuga asperiores optio assumenda veritatis iusto minus sequi, architecto quibusdam voluptatem porro accusamus obcaecati vitae eligendi suscipit commodi laudantium, vel.
						</div>
					</tabs>
				</div>
			</div>


			<br>
			<h2>Tooltip</h2>
			<button tooltip="Tooltip top">tooltip default</button>
			<button tooltip="Tooltip down" origin="down">tooltip down</button>
			<button tooltip="Tooltip left" origin="left">tooltip left</button>
			<button tooltip="Tooltip right" origin="right">tooltip right</button>

			<br>
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

			<button (click)="popup1.openPopup()">Popup with close button</button>
			<button (click)="popup2.openPopup()">Popup without close button</button>

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