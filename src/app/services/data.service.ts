import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
	constructor(private _httpClient: HttpClient) {}

	public loadTodoList(): Observable<any> {
		return this._httpClient.get('assets/banks.json');
	}
	public loadTodoList2(): Observable<any> {
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
}
