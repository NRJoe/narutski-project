import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public title: string = 'narutski-project';
	public active: boolean = false;
	@Output()
	public opened: any = new EventEmitter<any>();

	public onBurgerClicked(): void {
		console.log(this.active)
		this.active = !this.active;
		this.opened.emit();
		if (this.active) {
			
		}
	}
}
