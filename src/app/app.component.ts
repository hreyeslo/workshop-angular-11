import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'angular-element',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input()title = 'angular-element';
}
