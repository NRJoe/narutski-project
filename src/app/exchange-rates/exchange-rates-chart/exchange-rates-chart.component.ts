import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { ExchangeRatesComponent } from '../exchange-rates.component';

@Component({
	selector: 'app-exchange-rates-chart',
	templateUrl: './exchange-rates-chart.component.html',
	styleUrls: ['./exchange-rates-chart.component.scss'],
})
export class ExchangeRatesChartComponent implements OnInit {
	public currDynamicRate: any[] = this._exchangeRates.exchRatesUsdDynamic;

	public lineChartData: ChartDataSets[] = [{ data: this.currDynamicRate }];

	public lineChartLabels: Label[] = this._exchangeRates.days;

	public lineChartOptions: any = {
		responsive: true,
	};
	public lineChartColors: Color[] = [
		{
			borderColor: 'black',
			backgroundColor: 'rgba(113, 189, 113)',
		},
	];
	public lineChartLegend: any = false;
	public lineChartPlugins: any = [];
	public lineChartType: any = 'line';

	constructor(private _exchangeRates: ExchangeRatesComponent) {}
	public ngOnInit(): void {}

	public exchRatesDynamicUsd(): void {
		if (this.currDynamicRate !== this._exchangeRates.exchRatesUsdDynamic) {
			this.currDynamicRate = this._exchangeRates.exchRatesUsdDynamic;
			this.lineChartData = [
				{ data: this._exchangeRates.exchRatesUsdDynamic },
			];
		}
	}
	public exchRatesDynamicRub(): void {
		if (this.currDynamicRate !== this._exchangeRates.exchRatesRubDynamic) {
			this.currDynamicRate = this._exchangeRates.exchRatesRubDynamic;
			this.lineChartData = [
				{ data: this._exchangeRates.exchRatesRubDynamic },
			];
		}
	}
	public exchRatesDynamicEur(): void {
		if (this.currDynamicRate !== this._exchangeRates.exchRatesEurDynamic) {
			this.currDynamicRate = this._exchangeRates.exchRatesEurDynamic;
			this.lineChartData = [
				{ data: this._exchangeRates.exchRatesEurDynamic },
			];
		}
	}
}
