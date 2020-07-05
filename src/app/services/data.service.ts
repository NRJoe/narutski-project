import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
@Injectable()
export class DataService {
	public startDateYear: any = moment()
		.subtract(1, 'year')
		.format()
		.slice(0, 10);
	public endDateYear: any = moment().format().slice(0, 10);

	constructor(private _httpClient: HttpClient) {}

	public loadBanks(): Observable<any> {
		return this._httpClient.get('assets/banks.json');
	}
	public loadBanksForRates(): Observable<any> {
		return this._httpClient.get('assets/banksForRates.json');
	}
	public loadExchRatesUsd(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/USD?parammode=2'
		);
	}
	public loadExchRatesRub(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/RUB?parammode=2'
		);
	}
	public loadExchRatesEur(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/EUR?parammode=2'
		);
	}
	public loadExchRatesUah(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/UAH?parammode=2'
		);
	}
	public loadExchRatesCny(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/CNY?parammode=2'
		);
	}
	public loadExchRatesGbp(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/GBP?parammode=2'
		);
	}
	public loadExchRatesJpy(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/JPY?parammode=2'
		);
	}
	public loadExchRatesPln(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/PLN?parammode=2'
		);
	}
	public loadExchRatesKzt(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/KZT?parammode=2'
		);
	}
	public loadExchRatesUsdDynamic(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/dynamics/145?startdate=2020-6-1&enddate=2022-1-1'
		);
	}
	public loadExchRatesRubDynamic(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/dynamics/298?periodicity=1&startdate=2020-6-1&enddate=2022-1-1'
		);
	}
	public loadExchRatesEurDynamic(): Observable<any> {
		return this._httpClient.get(
			'https://www.nbrb.by/api/exrates/rates/dynamics/292?periodicity=1&startdate=2020-6-1&enddate=2022-1-1'
		);
	}
	public loadExchRatesUsdDynamicYear(): Observable<any> {
		return this._httpClient.get(
			`https://www.nbrb.by/api/exrates/rates/dynamics/145?startdate=
				${this.startDateYear}
				&enddate=
				${this.endDateYear}`
		);
	}
	public loadExchRatesRubDynamicYear(): Observable<any> {
		return this._httpClient.get(
			`https://www.nbrb.by/api/exrates/rates/dynamics/298?periodicity=1&startdate=
			${this.startDateYear}
			&enddate=
			${this.endDateYear}`
		);
	}
	public loadExchRatesEurDynamicYear(): Observable<any> {
		return this._httpClient.get(
			`https://www.nbrb.by/api/exrates/rates/dynamics/292?periodicity=1&startdate=
			${this.startDateYear}
			&enddate=
			${this.endDateYear}`
		);
	}
}
