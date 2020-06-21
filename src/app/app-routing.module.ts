import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BanksComponent } from './banks/banks.component';
import { ConverterComponent } from './converter/converter.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ErrorComponent } from './error/error.component';
import { NewsComponent } from './news/news.component';
import { BanksItemComponent } from 'src/app/banks/banks-item/banks-item.component';
import { NewsItemComponent } from './news/news-item/news-item.component';

const routes: Routes = [
	{ path: 'about', component: AboutComponent },
	{ path: 'banks', component: BanksComponent },
	{ path: 'banks/:id', component: BanksItemComponent },
	{ path: 'converter', component: ConverterComponent },
	{ path: 'rates', component: ExchangeRatesComponent },
	{ path: 'news', component: NewsComponent },
	{ path: 'news/:id', component: NewsItemComponent },
	{ path: '', component: MainPageComponent },
	{ path: '**', component: ErrorComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
