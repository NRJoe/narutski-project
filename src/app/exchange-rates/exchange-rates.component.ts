import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { BanksService } from '../services/banks.service';

@Component({
	selector: 'app-exchange-rates',
	templateUrl: './exchange-rates.component.html',
	styleUrls: ['./exchange-rates.component.scss'],
})
export class ExchangeRatesComponent {
	public exchRates: any[] = [];
	public exchRatesDynamic: any[] = [];
	public exchRatesUsdDynamic: any[] = [];
	public exchRatesEurDynamic: any[] = [];
	public exchRatesRubDynamic: any[] = [];
	public eurRates: object;
	public uahRates: object;
	public rubRates: object;
	public usdRates: object;

	public isNBRB: boolean = true;
	public chart: any[];
	public days: any[] = [];

	public usdDynamic: any[] = [];
	public rubDynamic: any[] = [];
	public eurDynamic: any[] = [];

	public currDynamicRate: any[] = this.exchRatesUsdDynamic;

	constructor(
		private _httpClient: HttpClient,
		private _dataService: DataService,
		public _banksService: BanksService
	) {
		this._dataService.loadExchRatesUsd().subscribe((usdRates: any[]) => {
			this.usdRates = usdRates;
			this.exchRates.push(this.usdRates);
		});
		this._dataService.loadExchRatesRub().subscribe((rubRates: any[]) => {
			this.rubRates = rubRates;
			this.exchRates.push(this.rubRates);
		});
		this._dataService.loadExchRatesUah().subscribe((uahRates: any[]) => {
			this.uahRates = uahRates;
			this.exchRates.push(this.uahRates);
		});
		this._dataService.loadExchRatesEur().subscribe((eurRates: any[]) => {
			this.eurRates = eurRates;
			this.exchRates.push(this.eurRates);
		});

		this._dataService
			.loadExchRatesUsdDynamic()
			.subscribe((UsdDynamic: any[]) => {
				this.usdDynamic = UsdDynamic;
				this.usdDynamic.map((rate: any) =>
					this.exchRatesUsdDynamic.push(rate.Cur_OfficialRate)
				);
			});
		////////////////////////////////////////////////////////////////
		this._dataService
			.loadExchRatesUsdDynamic()
			.subscribe((UsdDynamic: any[]) => {
				this.usdDynamic = UsdDynamic;
				this.usdDynamic.map((rate: any) =>
					// tslint:disable-next-line:no-magic-numbers
					this.days.push(rate.Date.slice(5, 10))
				);
			});
		this._dataService
			.loadExchRatesRubDynamic()
			.subscribe((RubDynamic: any[]) => {
				this.rubDynamic = RubDynamic;
				this.rubDynamic.map((rate: any) =>
					this.exchRatesRubDynamic.push(rate.Cur_OfficialRate)
				);
			});
		this._dataService
			.loadExchRatesEurDynamic()
			.subscribe((EurDynamic: any[]) => {
				this.eurDynamic = EurDynamic;
				this.eurDynamic.map((rate: any) =>
					this.exchRatesEurDynamic.push(rate.Cur_OfficialRate)
				);
			});
		/////////////////////////////////////////////////////////////////////////////
		// this._banksService
		// 	.loadBelarusbankExchRatesUsd()
		// 	.subscribe((Rates: any) => {
		// 		_banksService.banksRates.push(Rates[0]);
		// 		// console.log(_banksService.banksRates[0].USD_in);
		// 		// console.log(_banksService.banks);
		// 	});
	}

	public NBtoCB(): void {
		this.isNBRB = !this.isNBRB;
	}
}
