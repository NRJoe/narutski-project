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
	public resetNbrb(): void {
		this._nbConverterService.valUsd = null;
		this._nbConverterService.valEur = null;
		this._nbConverterService.valByn = null;
		this._nbConverterService.valRub = null;
		this._nbConverterService.valPln = null;
		this._nbConverterService.valCny = null;
		this._nbConverterService.valJpy = null;
		this._nbConverterService.valUah = null;
		this._nbConverterService.valKzt = null;
		this._nbConverterService.valGbp = null;
	}
	public resetBanks(): void {
		this._banksConverterService.valUsdBuySell = null;
		this._banksConverterService.valEurBuySell = null;
		this._banksConverterService.valBynBuySell = null;
		this._banksConverterService.valRubBuySell = null;
	}
}
