import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data.service';
import Banks from 'src/models/banks';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class BanksService {
	public banks: any[];
	public currBankId: number;
	public banksRates: any[] = [];

	constructor(
		public _dataService: DataService,
		public _httpClient: HttpClient
	) {
		this._dataService.loadTodoList().subscribe((banks: Banks[]) => {
			this.banks = banks;
		});
	}

	public loadBelarusbankExchRatesUsd(): Observable<any> {
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/kursExchange?city=%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2'
		);
	}
}
