import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
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
	public loadBAPBNews(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/https://belapb.by/app_news.php',
			{
				responseType: 'text',
				headers,
			}
		);
	}
	public loadDabrabidNews(): Observable<any> {
		const headers: any = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		});
		return this._httpClient.get(
			'https://cors-anywhere.herokuapp.com/bankdabrabyt.by/api/news.php',
			{
				responseType: 'text',
				headers,
			}
		);
	}
	public loadPriorbankNews(): Observable<any> {
		return this._httpClient.get('https:');
	}
	public loadAlfaBankNews(): Observable<any> {
		return this._httpClient.get('https://');
	}
}
