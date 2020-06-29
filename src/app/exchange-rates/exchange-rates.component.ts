import { Component } from '@angular/core';
import { BanksService } from '../services/banks.service';
import { ExchangeRatesService } from '../services/exchange-rates.service';
import * as moment from 'moment';
@Component({
	selector: 'app-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent {
	public todayDate: any = moment().locale('ru').format('Do MMMM YYYY');
	constructor(
		public _exchRatesService: ExchangeRatesService,
		public _banksService: BanksService
	) {}
}
