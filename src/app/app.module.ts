import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { Popup } from './components/popup';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent,
		Popup
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
