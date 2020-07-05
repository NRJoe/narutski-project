import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-exchange-rates-chart',
	templateUrl: './exchange-rates-chart.component.html',
	styleUrls: ['./exchange-rates-chart.component.scss'],
})
export class ExchangeRatesChartComponent {
	public currDynamicRate: any[] = this._exchRatesService.exchRatesUsdDynamic;
	public days: any[] = [];
	public lineChartData: ChartDataSets[] = [
		{ data: this.currDynamicRate, label: 'Курс валют' },
	];

	public lineChartLabels: Label[] = this.days;

	public lineChartOptions: any = {
		responsive: true,
	};
	public lineChartColors: Color[] = [
		{
			borderColor: 'rgba(173, 173, 173)',
			backgroundColor: 'rgba(113, 189, 113)',
		},
	];
	public lineChartLegend: any = false;
	public lineChartPlugins: any = [];
	public lineChartType: any = 'line';

	constructor(
		private _exchRatesService: ExchangeRatesService,
		private _dataService: DataService
	) {
		this._dataService
			.loadExchRatesUsdDynamic()
			.subscribe((UsdDynamic: any[]) => {
				UsdDynamic.slice(-31, -1).map((rate: any) =>
					this.days.push(rate.Date.slice(5, 10))
				);
			});
	}

	public exchRatesDynamicUsd(): any {
		if (
			this.currDynamicRate !==
			this._exchRatesService.exchRatesUsdDynamic.slice(-31, -1)
		) {
			this.currDynamicRate = this._exchRatesService.exchRatesUsdDynamic;
			this.lineChartData = [
				{ data: this._exchRatesService.exchRatesUsdDynamic },
			];
			this.lineChartLabels = this._exchRatesService.days.slice(-31, -1);
		}
	}
	public exchRatesDynamicRub(): void {
		if (
			this.currDynamicRate !== this._exchRatesService.exchRatesRubDynamic
		) {
			this.currDynamicRate = this._exchRatesService.exchRatesRubDynamic;
			this.lineChartData = [
				{ data: this._exchRatesService.exchRatesRubDynamic },
			];
			this.lineChartLabels = this._exchRatesService.days.slice(-31, -1);
		}
	}
	public exchRatesDynamicEur(): void {
		if (
			this.currDynamicRate !== this._exchRatesService.exchRatesEurDynamic
		) {
			this.currDynamicRate = this._exchRatesService.exchRatesEurDynamic;
			this.lineChartData = [
				{ data: this._exchRatesService.exchRatesEurDynamic },
			];
			this.lineChartLabels = this._exchRatesService.days.slice(-31, -1);
		}
	}

	public exchRatesDynamicUsdYear(): void {
		if (this.currDynamicRate !== this._exchRatesService.usdDynamicYear) {
			this.currDynamicRate = this._exchRatesService.usdDynamicYear;
			this.lineChartData = [
				{ data: this._exchRatesService.usdDynamicYear },
			];
			this.lineChartLabels = this._exchRatesService.daysYear;
		}
	}
	public exchRatesDynamicEurYear(): void {
		if (this.currDynamicRate !== this._exchRatesService.eurDynamicYear) {
			this.currDynamicRate = this._exchRatesService.eurDynamicYear;
			this.lineChartData = [
				{ data: this._exchRatesService.eurDynamicYear },
			];
			this.lineChartLabels = this._exchRatesService.daysYear;
		}
	}
	public exchRatesDynamicRubYear(): void {
		if (this.currDynamicRate !== this._exchRatesService.rubDynamicYear) {
			this.currDynamicRate = this._exchRatesService.rubDynamicYear;
			this.lineChartData = [
				{ data: this._exchRatesService.rubDynamicYear },
			];
			this.lineChartLabels = this._exchRatesService.daysYear;
		}
	}
}
