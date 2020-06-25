import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data.service';
import Banks from 'src/models/banks';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class BanksService {
	public banks: any[];
	public banksForRates: any[];
	public currBankId: number;
	public banksRates: any[] = [];

	constructor(
		public _dataService: DataService,
		public _httpClient: HttpClient
	) {
		//////////////////////////////////////////////////////////////// Название
		this._dataService.loadTodoList().subscribe((banks: Banks[]) => {
			this.banks = banks;
		});
		this._dataService
			.loadTodoList2()
			.subscribe((banksForRates: Banks[]) => {
				this.banksForRates = banksForRates;
			});
	}
	public loadBelarusbankExchRatesBuySell(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/kursExchange?city=%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2',
			{
				responseType: 'text',
				headers,
			}
		);
	}
	public loadDabrabidExchRatesBuySell(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://bankdabrabyt.by/export_courses.php',
			{
				responseType: 'text',
				headers,
			}
		);
	}
	public loadBAPBExchRatesBuySell(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://belapb.by/CashExRatesDaily.php',
			{
				responseType: 'text',
				headers,
			}
		);
	}
	public loadAlfabankExchRatesBuySell(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://developerhub.alfabank.by:8273/partner/1.0.1/public/rates',
			{
				responseType: 'text',
				headers,
			}
		);
	}
}
