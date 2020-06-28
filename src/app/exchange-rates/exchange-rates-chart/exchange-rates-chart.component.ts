import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, BaseChartDirective } from 'ng2-charts';
import { ExchangeRatesService } from 'src/app/services/exchange-rates.service';

@Component({
	selector: 'app-exchange-rates-chart',
	templateUrl: './exchange-rates-chart.component.html',
	styleUrls: ['./exchange-rates-chart.component.scss'],
})
export class ExchangeRatesChartComponent implements OnInit {
	public currDynamicRate: any[] = this._exchRatesService.exchRatesUsdDynamic;

	public lineChartData: ChartDataSets[] = [{ data: this.currDynamicRate }];

	public lineChartLabels: Label[] = this._exchRatesService.days;

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

	constructor(private _exchRatesService: ExchangeRatesService) {}
	public ngOnInit(): void {}

	public exchRatesDynamicUsd(): void {
		if (
			this.currDynamicRate !== this._exchRatesService.exchRatesUsdDynamic
		) {
			this.currDynamicRate = this._exchRatesService.exchRatesUsdDynamic;
			this.lineChartData = [
				{ data: this._exchRatesService.exchRatesUsdDynamic },
			];
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
		}
	}
}
