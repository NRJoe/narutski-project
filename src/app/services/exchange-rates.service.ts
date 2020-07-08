import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { BanksService } from './banks.service';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
	providedIn: 'root',
})
export class ExchangeRatesService {
	public exchRates: any[] = [];
	public exchRatesDynamic: any[] = [];
	public exchRatesUsdDynamic: any[] = [];
	public exchRatesEurDynamic: any[] = [];
	public exchRatesRubDynamic: any[] = [];
	public eurRates: any;
	public uahRates: any;
	public rubRates: any;
	public usdRates: any;
	public cnyRates: any;
	public gbpRates: any;
	public jpyRates: any;
	public plnRates: any;
	public kztRates: any;

	public isNBRB: boolean = true;
	public chart: any[];
	public days: any[] = [];
	public daysYear: any[] = [];

	public usdDynamic: any[] = [];
	public rubDynamic: any[] = [];
	public eurDynamic: any[] = [];

	public usdDynamicYear: any[] = [];
	public rubDynamicYear: any[] = [];
	public eurDynamicYear: any[] = [];

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
		this._dataService.loadExchRatesCny().subscribe((cnyRates: any[]) => {
			this.cnyRates = cnyRates;
			this.exchRates.push(this.cnyRates);
		});
		this._dataService.loadExchRatesGbp().subscribe((gbpRates: any[]) => {
			this.gbpRates = gbpRates;
			this.exchRates.push(this.gbpRates);
		});
		this._dataService.loadExchRatesJpy().subscribe((jpyRates: any[]) => {
			this.jpyRates = jpyRates;
			this.exchRates.push(this.jpyRates);
		});
		this._dataService.loadExchRatesPln().subscribe((plnRates: any[]) => {
			this.plnRates = plnRates;
			this.exchRates.push(this.plnRates);
		});
		this._dataService.loadExchRatesKzt().subscribe((kztRates: any[]) => {
			this.kztRates = kztRates;
			this.exchRates.push(this.kztRates);
		});

		this._dataService
			.loadExchRatesUsdDynamic()
			.subscribe((UsdDynamic: any[]) => {
				this.usdDynamic = UsdDynamic;
				this.usdDynamic.map((rate: any) =>
					this.exchRatesUsdDynamic.push(rate.Cur_OfficialRate)
				);
			});
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
		this._dataService
			.loadExchRatesUsdDynamicYear()
			.subscribe((UsdDynamicYear: any[]) => {
				UsdDynamicYear.map((rate: any) => {
					if (rate.Date.slice(8, 10) === `01`) {
						this.usdDynamicYear.push(rate.Cur_OfficialRate);
						this.daysYear.push(rate.Date.slice(0, 10));
					}
				});
			});
		this._dataService
			.loadExchRatesRubDynamicYear()
			.subscribe((RubDynamicYear: any[]) => {
				RubDynamicYear.map((rate: any) => {
					if (rate.Date.slice(8, 10) === `01`) {
						this.rubDynamicYear.push(rate.Cur_OfficialRate);
					}
				});
			});
		this._dataService
			.loadExchRatesEurDynamicYear()
			.subscribe((EurDynamicYear: any[]) => {
				EurDynamicYear.map((rate: any) => {
					if (rate.Date.slice(8, 10) === `01`) {
						this.eurDynamicYear.push(rate.Cur_OfficialRate);
					}
				});
			});
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
			});

		this._banksService
			.loadBAPBExchRatesBuySell()
			.subscribe((Rates: any) => {
				const parser: any = new DOMParser();
				const xml: any = parser.parseFromString(
					Rates.toString(),
					'text/xml'
				);
				const BAPBExchRatesBuySell: any = ngxXml2jsonService.xmlToJson(
					xml
				);
				BAPBExchRatesBuySell.DailyExRates.Currency.map((e: any) => {
					if (
						e.BankId === '13081' &&
						e.CurrSrc === 'RUB' &&
						e.CurrTrg === 'BYN'
					) {
						this.BAPBRates.splice(4, 0, e.ConvRate);
					} else if (
						e.BankId === '13081' &&
						e.CurrSrc === 'BYN' &&
						e.CurrTrg === 'RUB'
					) {
						this.BAPBRates.splice(5, 0, e.ConvRate);
					} else if (
						e.BankId === '13081' &&
						e.CurrSrc === 'BYN' &&
						e.CurrTrg === 'USD'
					) {
						this.BAPBRates.splice(1, 0, e.ConvRate);
					} else if (
						e.BankId === '13081' &&
						e.CurrSrc === 'USD' &&
						e.CurrTrg === 'BYN'
					) {
						this.BAPBRates.splice(0, 0, e.ConvRate);
					} else if (
						e.BankId === '13081' &&
						e.CurrSrc === 'BYN' &&
						e.CurrTrg === 'EUR'
					) {
						this.BAPBRates.splice(2, 0, e.ConvRate);
					} else if (
						e.BankId === '13081' &&
						e.CurrSrc === 'EUR' &&
						e.CurrTrg === 'BYN'
					) {
						this.BAPBRates.splice(3, 0, e.ConvRate);
					}
				});
			});

		this._banksService
			.loadAlfabankExchRatesBuySell()
			.subscribe((Rates: any) => {
				const AlfabankRatesParse: any = JSON.parse(Rates);
				AlfabankRatesParse.rates.map((e: any) => {
					if (e.sellCode === 840 && e.buyCode === 933) {
						this.alfaRates.splice(0, 0, e.sellRate, e.buyRate);
					} else if (e.sellCode === 978 && e.buyCode === 933) {
						this.alfaRates.splice(2, 0, e.sellRate, e.buyRate);
					} else if (e.sellCode === 643 && e.buyCode === 933) {
						this.alfaRates.splice(4, 0, e.sellRate, e.buyRate);
					}
				});
			});
		this._banksService.banksRates.push(this.alfaRates);
		this._banksService.banksRates.push(this.belarusbankRates);
		this._banksService.banksRates.push(this.dabrabidRates);
		this._banksService.banksRates.push(this.BAPBRates);
	}
	public NBtoCB(): void {
		if (!this.isNBRB) {
			this.isNBRB = !this.isNBRB;
		}
	}
	public CBtoNB(): void {
		if (this.isNBRB) {
			this.isNBRB = !this.isNBRB;
		}
	}
}
