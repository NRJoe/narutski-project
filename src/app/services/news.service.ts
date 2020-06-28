import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxXml2jsonService } from 'ngx-xml2json';
import News from 'src/models/news';
@Injectable()
export class NewsService {
	public belarusBankNews: any = [];
	public BAPBNews: any = [];
	public news: any[] = [];
	public newsId: number = 0;
	public currentPage: number = 1;
	public itemsPerPage: number = 10;

	constructor(
		private _httpClient: HttpClient,
		private ngxXml2jsonService: NgxXml2jsonService
	) {
		this.loadBelarusBankNews().subscribe((belarusBankNews: News[]) => {
			this.belarusBankNews = belarusBankNews.splice(0, 30);
			for (const bbnews of this.belarusBankNews) {
				bbnews.html_ru = bbnews.html_ru.replace(/<.*?>/gm, '');
				bbnews.class = 'belarusBank';
			}
			this.news.push(...this.belarusBankNews);
		});
		this.loadBAPBNews().subscribe((BAPBNews: any) => {
			this.BAPBNews = BAPBNews;
			const parser: any = new DOMParser();
			const xml: any = parser.parseFromString(
				this.BAPBNews.toString(),
				'text/xml'
			);
			const BAPBNewsObj: any = ngxXml2jsonService.xmlToJson(xml);
			this.BAPBNews = BAPBNewsObj;
			this.BAPBNews.NEWSLIST.NEWS.map(
				(e: any) => (
					e.CLOB_BODY.replace(/<.&*?>/gm, ''),
					(e.html_ru = e.CLOB_BODY),
					(e.name_ru = e.ITMTITLE),
					(e.start_date = e.ITMPUBDATE),
					(e.start_date = e.start_date.split('.')),
					(e.start_date = `${e.start_date[2]}-${e.start_date[1]}-${e.start_date[0]}`),
					(e.img = `assets/banks/belapb_logo_news.jpg`),
					(e.class = `belAgroPromBank`),
					delete e.CLOB_BODY,
					delete e.ITMTITLE,
					delete e.ITMPUBDATE
				)
			);
			for (const bapbnews of this.BAPBNews.NEWSLIST.NEWS) {
				bapbnews.html_ru = bapbnews.html_ru.replace(/<.*?>/gm, '');
			}
			this.news.push(...this.BAPBNews.NEWSLIST.NEWS);
			this.news.sort((a: any, b: any) => {
				return Date.parse(b.start_date) - Date.parse(a.start_date);
			});
			this.news.map(
				(e: any) => (
					(e.id = this.newsId + 1), (this.newsId = this.newsId + 1)
				)
			);
			console.log(this.news);
		});
	}

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
}
