import { Component } from '@angular/core';
import { BanksService } from '../services/banks.service';
import { ExchangeRatesService } from '../services/exchange-rates.service';
import { NbConverterService } from '../services/nb-converter.service';
import { BanksConverterService } from '../services/banks-converter.service';
import * as moment from 'moment';
@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
	public todayDate: any = moment()
		.locale('ru')
		.format('Do MMMM YYYY, H:mm:ss');

	constructor(
		public _exchangeRatesService: ExchangeRatesService,
		public _banksService: BanksService,
		public _nbConverterService: NbConverterService,
		public _banksConverterService: BanksConverterService
	) {}
}
