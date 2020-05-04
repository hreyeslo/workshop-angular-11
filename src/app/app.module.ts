import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule],
	entryComponents: [AppComponent]
})
export class AppModule {
	constructor(private injector: Injector) {
		const el = createCustomElement(AppComponent, { injector });
		customElements.define('angular-element', el);
	}
	ngDoBootstrap() {}
}
