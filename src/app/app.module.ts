import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { BanksComponent } from './banks/banks.component';
import { NewsComponent } from './news/news.component';
import { ConverterComponent } from './converter/converter.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { BanksItemComponent } from 'src/app/banks/banks-item/banks-item.component';
import { BanksService } from './services/banks.service';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsService } from './services/news.service';
import { ExchangeRatesChartComponent } from './exchange-rates/exchange-rates-chart/exchange-rates-chart.component';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
	declarations: [
		AppComponent,
		MainPageComponent,
		ExchangeRatesComponent,
		BanksComponent,
		NewsComponent,
		ConverterComponent,
		AboutComponent,
		ErrorComponent,
		BanksItemComponent,
		NewsItemComponent,
		ExchangeRatesChartComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		ChartsModule,
		NgxPaginationModule,
	],
	providers: [
		DataService,
		BanksComponent,
		NewsComponent,
		BanksService,
		NewsService,
		ExchangeRatesComponent,
		ExchangeRatesChartComponent,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
