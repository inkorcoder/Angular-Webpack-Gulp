import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Popup } from './components/popup';
import { Dropdown } from './components/dropdown';
import { Tabs } from './components/tabs';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		Popup,
		Dropdown,
		Tabs
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
