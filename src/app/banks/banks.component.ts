import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { BanksService } from '../services/banks.service';

@Component({
	selector: 'app-banks',
	templateUrl: './banks.component.html',
	styleUrls: ['./banks.component.scss'],
})
export class BanksComponent {
	constructor(
		public _dataService: DataService,
		public _banksService: BanksService
	) {}
}
