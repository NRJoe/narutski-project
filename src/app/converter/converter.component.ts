import { Component, OnInit, Input } from '@angular/core';
import { ExchangeRatesComponent } from '../exchange-rates/exchange-rates.component';

@Component({
	selector: 'app-converter',
	templateUrl: './converter.component.html',
	styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent {
	public valUsd: number;
	public valEur: number;
	public valRub: number;
	public valByn: number;
	public valUah: number;
	public numAfterComma: number = 3;

	constructor(public _exchangeRates: ExchangeRatesComponent) {}
	public converterUsd(newValue: number): number {
		this.valUsd = newValue;
		console.log(this.valRub);
		return (
			(this.valEur = +(
				this.valUsd *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(
				this.valUsd *
				100 *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valByn = +(
				this.valUsd * this._exchangeRates.usdRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valUah = +(
				this.valUsd *
				100 *
				(this._exchangeRates.usdRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma))
		);
	}

	public converterEur(newValue: number): number {
		this.valEur = newValue;
		return (
			(this.valUsd = +(
				this.valEur *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(
				this.valEur *
				100 *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valByn = +(
				this.valEur * this._exchangeRates.eurRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valUah = +(
				this.valEur *
				100 *
				(this._exchangeRates.eurRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma))
		);
	}

	public converterRub(newValue: number): number {
		this.valRub = newValue;
		return (
			(this.valUsd = +(
				(this.valRub / 100) *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valEur = +(
				(this.valRub / 100) *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valByn = +(
				(this.valRub / 100) *
				this._exchangeRates.rubRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valUah = +(
				this.valRub *
				(this._exchangeRates.rubRates.Cur_OfficialRate /
					this._exchangeRates.uahRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma))
		);
	}

	public converterByn(newValue: number): number {
		this.valByn = newValue;
		return (
			(this.valUsd = +(
				this.valByn / this._exchangeRates.usdRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valRub = +(
				(this.valByn * 100) /
				this._exchangeRates.rubRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valEur = +(
				this.valByn / this._exchangeRates.eurRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valUah = +(
				(this.valByn * 100) /
				this._exchangeRates.uahRates.Cur_OfficialRate
			).toFixed(this.numAfterComma))
		);
	}

	public converterUah(newValue: number): number {
		this.valUah = newValue;
		return (
			(this.valUsd = +(
				(this.valUah / 100) *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.usdRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(
				this.valUah *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.rubRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma)),
			(this.valByn = +(
				(this.valUah / 100) *
				this._exchangeRates.uahRates.Cur_OfficialRate
			).toFixed(this.numAfterComma)),
			(this.valEur = +(
				(this.valUah / 100) *
				(this._exchangeRates.uahRates.Cur_OfficialRate /
					this._exchangeRates.eurRates.Cur_OfficialRate)
			).toFixed(this.numAfterComma))
		);
	}
}
