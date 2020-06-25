import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import News from 'src/models/news';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
	public belarusBankNews: News[] = [];
	public BAPBNews: any = [];
	public dabrabidNews: any = [];
	public news: any[] = [];
	public newsId: number = 0;
	public currentPage: number = 1;
	public itemsPerPage: number = 10;

	public qqq: any[] = [];

	constructor(
		public _newsService: NewsService,
		private ngxXml2jsonService: NgxXml2jsonService
	) {
		this._newsService
			.loadBelarusBankNews()
			.subscribe((belarusBankNews: News[]) => {
				this.belarusBankNews = belarusBankNews;
				this.belarusBankNews[
					this.newsId
				].html_ru = this.belarusBankNews[this.newsId].html_ru.replace(
					/<.*?>/gm,
					''
				);
				// this.news.push(this.belarusBankNews);
			});

		this._newsService.loadBAPBNews().subscribe((BAPBNews: any) => {
			this.BAPBNews = BAPBNews;
			const parser: any = new DOMParser();
			const xml: any = parser.parseFromString(
				this.BAPBNews.toString(),
				'text/xml'
			);
			const BAPBNewsObj: any = ngxXml2jsonService.xmlToJson(xml);
			this.BAPBNews = BAPBNewsObj;
			this.BAPBNews.NEWSLIST.NEWS[
				this.newsId
			].CLOB_BODY = this.BAPBNews.NEWSLIST.NEWS[
				this.newsId
			].CLOB_BODY.replace(/<.*?>/gm, '');
			// this.news.push(this.BAPBNews.NEWSLIST.NEWS);
			// console.log(this.news);
		});

		this._newsService.loadDabrabidNews().subscribe((dabrabidNews: any) => {
			this.dabrabidNews = dabrabidNews;
			const parser: any = new DOMParser();
			const xml: any = parser.parseFromString(
				this.dabrabidNews.toString(),
				'text/xml'
			);

			// console.log(xml);
			///////////////////////// неверно
			const dabrabidNewsObj: any = ngxXml2jsonService.xmlToJson(xml);

			this.dabrabidNews = dabrabidNewsObj;

			this.dabrabidNews.news_list.news[
				this.newsId
			].body = this.dabrabidNews.news_list.news[this.newsId].body;
			// this.news.push(this.BAPBNews.news_list.news);
			this.qqq = this.belarusBankNews.concat(this.BAPBNews.NEWSLIST.NEWS);
			// console.log(this.belarusBankNews);
			// console.log(this.BAPBNews.NEWSLIST.NEWS);
			// console.log(this.qqq);
		});
	}
	public JSONtoHTML(text: string): string {
		return (text = text.replace(/<.*?>/gm, ''));
	}
}
