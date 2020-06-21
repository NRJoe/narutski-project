import { Component, OnInit, Input } from '@angular/core';
import { ExchangeRatesComponent } from '../exchange-rates/exchange-rates.component';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
	public valUsd: number;
	public valEur: number;
	public valRub: number;
	public valByn: number;
	public valUah: number;

	@Input()
	public eurRates: object;

	constructor(public _exchangeRates: ExchangeRatesComponent) {}

	ngOnInit(): void {}

	public converterUsd(newValue: number): number {
		this.valUsd = newValue;
		return (
			(this.valEur =
				this.valUsd *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate)),
			(this.valRub =
				this.valUsd *
				100 *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)),
			(this.valByn =
				this.valUsd * this._exchangeRates.usdRates.Cur_OfficialRate),
			(this.valUah =
				this.valUsd *
				100 *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate))
		);
	}

	public converterEur(newValue: number): number {
		this.valEur = newValue;
		return (
			(this.valUsd =
				this.valEur *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)),
			(this.valRub =
				this.valEur *
				100 *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)),
			(this.valByn =
				this.valEur * this._exchangeRates.eurRates.Cur_OfficialRate),
			(this.valUah =
				this.valEur *
				100 *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate))
		);
	}

	public converterRub(newValue: number): number {
		this.valRub = newValue;
		return (
			(this.valUsd =
				(this.valRub / 100) *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)),
			(this.valEur =
				(this.valRub / 100) *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate)),
			(this.valByn =
				(this.valRub / 100) *
				this._exchangeRates.rubRates.Cur_OfficialRate),
			(this.valUah =
				this.valRub *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate))
		);
	}

	public converterByn(newValue: number): number {
		this.valByn = newValue;
		return (
			(this.valUsd =
				this.valByn / this._exchangeRates.usdRates.Cur_OfficialRate),
			(this.valRub =
				(this.valByn * 100) /
				this._exchangeRates.rubRates.Cur_OfficialRate),
			(this.valEur =
				this.valByn / this._exchangeRates.eurRates.Cur_OfficialRate),
			(this.valUah =
				(this.valByn * 100) /
				this._exchangeRates.uahRates.Cur_OfficialRate)
		);
	}

	public converterUah(newValue: number): number {
		this.valUah = newValue;
		return (
			(this.valUsd =
				(this.valUah / 100) *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)),
			(this.valRub =
				this.valUah *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)),
			(this.valByn =
				(this.valUah / 100) *
				this._exchangeRates.uahRates.Cur_OfficialRate),
			(this.valEur =
				(this.valUah / 100) *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate))
		);
	}
}
