import { Component } from '@angular/core';
import { BanksService } from '../services/banks.service';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
	selector: 'app-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent {
	constructor(
		public _exchRatesService: ExchangeRatesService,
		public _banksService: BanksService
	) {}
}
