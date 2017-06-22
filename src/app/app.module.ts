import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Popup } from './components/popup';
import { Dropdown } from './components/dropdown';
import { Tabs } from './components/tabs';
import { Accordeon } from './components/accordeon';

import { TooltipDirective } from './directives/tooltip';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		Popup,
		Dropdown,
		Tabs,
		Accordeon,

		TooltipDirective
	],
	bootstrap: [ AppComponent ],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class AppModule {}