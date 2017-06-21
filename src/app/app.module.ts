import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Popup } from './components/popup';
import { Dropdown } from './components/dropdown';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		Popup,
		Dropdown
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
