import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsComponent } from '../news/news.component';

@Injectable({
	providedIn: 'root',
})
export class NewsService {
	public name: string;
	public text: string;
	constructor(private _httpClient: HttpClient) {}

	public loadBelarusBankNews(): Observable<any> {
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/news_info'
		);
	}
}
