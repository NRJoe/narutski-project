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

@NgModule({
 declarations: [
  AppComponent,
  MainPageComponent,
  ExchangeRatesComponent,
  BanksComponent,
  NewsComponent,
  ConverterComponent,
  AboutComponent,
 ],
 imports: [BrowserModule, AppRoutingModule],
 providers: [],
 bootstrap: [AppComponent],
})
export class AppModule {}
