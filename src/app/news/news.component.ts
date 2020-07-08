import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
@Component({
	selector: 'app-news',
	templateUrl: './news.component.html',
	styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
	constructor(public _newsService: NewsService) {}
	
}
