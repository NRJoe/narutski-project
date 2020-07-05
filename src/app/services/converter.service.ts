import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ConverterService {
	constructor(public _httpClient: HttpClient) {}

	public loadExchForConverter(): Observable<any> {
		return this._httpClient.get(
			'https://v6.exchangerate-api.com/v6/4c1553395dbabcd1f1234a9c/latest/USD'
		);
	}
}
