import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { BanksService } from './banks.service';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
	providedIn: 'root',
})
export class ExchangeRatesService implements OnInit {
	public exchRates: any[] = [];
	public exchRatesDynamic: any[] = [];
	public exchRatesUsdDynamic: any[] = [];
	public exchRatesEurDynamic: any[] = [];
	public exchRatesRubDynamic: any[] = [];
	public eurRates: any;
	public uahRates: any;
	public rubRates: any;
	public usdRates: any;

	public isNBRB: boolean = true;
	public chart: any[];
	public days: any[] = [];

	public usdDynamic: any[] = [];
	public rubDynamic: any[] = [];
	public eurDynamic: any[] = [];

	public currDynamicRate: any[] = this.exchRatesUsdDynamic;

	public belarusbankRates: number[] = [];
	public dabrabidRates: number[] = [];
	public BAPBRates: number[] = [];
	public alfaRates: number[] = [];

	public eurBuyRates: number[] = [];
	public eurSellRates: number[] = [];
	public usdBuyRates: number[] = [];
	public usdSellRates: number[] = [];
	public rubBuyRates: number[] = [];
	public rubSellRates: number[] = [];

	constructor(
		private _httpClient: HttpClient,
		private _dataService: DataService,
		public _banksService: BanksService,
		private ngxXml2jsonService: NgxXml2jsonService
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
		/////////////////////////////////////////////////////////////////////////////////////////////////////
		this._banksService
			.loadBelarusbankExchRatesBuySell()
			.subscribe((Rates: any) => {
				const belarusBankRatesParse: any = JSON.parse(Rates);
				this.belarusbankRates.push(
					+belarusBankRatesParse[0].USD_in,
					+belarusBankRatesParse[0].USD_out,
					+belarusBankRatesParse[0].EUR_in,
					+belarusBankRatesParse[0].EUR_out,
					+belarusBankRatesParse[0].RUB_in,
					+belarusBankRatesParse[0].RUB_out
				);
				_banksService.banksRates.push(this.belarusbankRates);
				// console.log(this.belarusbankRates);
			});
		this._banksService
			.loadDabrabidExchRatesBuySell()
			.subscribe((Rates: any) => {
				const parser: any = new DOMParser();
				const xml: any = parser.parseFromString(
					Rates.toString(),
					'text/xml'
				);
				const DabrabidExchRatesBuySell: any = ngxXml2jsonService.xmlToJson(
					xml
				);
				this.dabrabidRates.push(
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[0]['@attributes'].buy,
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[0]['@attributes'].sale,
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[1]['@attributes'].buy,
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[1]['@attributes'].sale,
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[2]['@attributes'].buy * 100,
					+DabrabidExchRatesBuySell.root.filials.filial[4].rates
						.value[2]['@attributes'].sale * 100
				);
				_banksService.banksRates.push(this.dabrabidRates);
				// console.log(this.dabrabidRates);
			});

		// this._banksService
		// 	.loadBAPBExchRatesBuySell()
		// 	.subscribe((Rates: any) => {
		// 		const parser: any = new DOMParser();
		// 		const xml: any = parser.parseFromString(
		// 			Rates.toString(),
		// 			'text/xml'
		// 		);
		// 		const BAPBExchRatesBuySell: any = ngxXml2jsonService.xmlToJson(
		// 			xml
		// 		);
		// 		console.log(BAPBExchRatesBuySell)
		// 		this.BAPBRates.push(
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[3].RateBuy,
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[3].RateSell,
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[2].RateBuy,
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[2].RateSell,
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[6].RateBuy,
		// 			+BAPBExchRatesBuySell.DailyExRates.Currency[6].RateSell
		// 		);
		// 		_banksService.banksRates.push(this.BAPBRates);
		// 		// console.log(this.BAPBRates);
		// 	});

		this._banksService
			.loadAlfabankExchRatesBuySell()
			.subscribe((Rates: any) => {
				const AlfabankRatesParse: any = JSON.parse(Rates);
				this.alfaRates.push(
					AlfabankRatesParse.rates[5].sellRate,
					AlfabankRatesParse.rates[5].buyRate,
					AlfabankRatesParse.rates[4].sellRate,
					AlfabankRatesParse.rates[4].buyRate,
					AlfabankRatesParse.rates[3].sellRate,
					AlfabankRatesParse.rates[3].buyRate
				);
				_banksService.banksRates.push(this.alfaRates);
				// console.log(this.alfaRates);
				// console.log(_banksService.banksRates);
			});
		this.eurBuyRates.push(
			this.belarusbankRates[0],
			this.dabrabidRates[0],
			this.BAPBRates[0],
			this.alfaRates[0]
		);
		this.eurSellRates.push(
			this.belarusbankRates[1],
			this.dabrabidRates[1],
			this.BAPBRates[1],
			this.alfaRates[2]
		);
		this.usdBuyRates.push(
			this.belarusbankRates[2],
			this.dabrabidRates[2],
			this.BAPBRates[2],
			this.alfaRates[2]
		);
		this.usdSellRates.push(
			this.belarusbankRates[3],
			this.dabrabidRates[3],
			this.BAPBRates[3],
			this.alfaRates[3]
		);
		this.rubBuyRates.push(
			this.belarusbankRates[4],
			this.dabrabidRates[4],
			this.BAPBRates[4],
			this.alfaRates[4]
		);
		this.rubSellRates.push(
			this.belarusbankRates[5],
			this.dabrabidRates[5],
			this.BAPBRates[5],
			this.alfaRates[5]
		);
	}

	public ngOnInit(): void {
		this._banksService.banksRates = [];
		this._banksService.banksRates.push(this.belarusbankRates);
		this._banksService.banksRates.push(this.dabrabidRates);
		// this._banksService.banksRates.push(this.BAPBRates);
		this._banksService.banksRates.push(this.alfaRates);
		console.log(this._banksService.banksRates);
	}
	public NBtoCB(): void {
		this.isNBRB = !this.isNBRB;
	}
}
