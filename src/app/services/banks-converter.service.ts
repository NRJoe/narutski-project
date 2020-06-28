import { Injectable, OnInit } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';
import { BanksService } from './banks.service';
import { DataService } from './data.service';

@Injectable()
export class BanksConverterService {
	public numAfterComma: number = 3;

	public minUsdBuy: number;
	public minUsdSell: number;
	public minEurBuy: number;
	public minEurSell: number;
	public minRubBuy: number;
	public minRubSell: number;

	public minBuy: number[];
	public minSell: number[];

	public banksBuy: boolean = true;

	public valUsdBuySell: number;
	public valEurBuySell: number;
	public valRubBuySell: number;
	public valBynBuySell: number;

	constructor(
		public _banksService: BanksService,
		public _exchangeRatesService: ExchangeRatesService,
		public _dataService: DataService
	) {}
	public sellToBuy(): void {
		this.banksBuy = !this.banksBuy;
		this.valUsdBuySell = null;
		this.valEurBuySell = null;
		this.valRubBuySell = null;
		this.valBynBuySell = null;
		this.converterCalc();
	}
	public converterCalc(): any {
		const usdArrayBuy: any = this._banksService.banksRates.map((e: any) => {
			return e[0];
		});
		const usdArraySell: any = this._banksService.banksRates.map(
			(e: any) => {
				return e[1];
			}
		);
		const eurArrayBuy: any = this._banksService.banksRates.map((e: any) => {
			return e[2];
		});
		const eurArraySell: any = this._banksService.banksRates.map(
			(e: any) => {
				return e[3];
			}
		);
		const rubArrayBuy: any = this._banksService.banksRates.map((e: any) => {
			return e[4];
		});
		const rubArraySell: any = this._banksService.banksRates.map(
			(e: any) => {
				return e[5];
			}
		);
		this.minUsdBuy = Math.min.apply(0, usdArrayBuy);
		this.minUsdSell = Math.min.apply(null, usdArraySell);
		this.minEurBuy = Math.min.apply(null, eurArrayBuy);
		this.minEurSell = Math.min.apply(null, eurArraySell);
		this.minRubBuy = Math.min.apply(null, rubArrayBuy);
		this.minRubSell = Math.min.apply(null, rubArraySell);
	}

	public converterUsdBuy(newValue: number): number {
		this.converterCalc();
		this.valUsdBuySell = newValue;
		return (
			(this.valEurBuySell = +(
				this.valUsdBuySell *
				(this.minUsdBuy / this.minEurBuy)
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				this.valUsdBuySell *
				100 *
				(this.minUsdBuy / this.minRubBuy)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				this.valUsdBuySell * this.minUsdBuy
			).toFixed(this.numAfterComma))
		);
	}

	public converterEurBuy(newValue: number): number {
		this.converterCalc();
		this.valEurBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				this.valEurBuySell *
				(this.minEurBuy / this.minUsdBuy)
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				this.valEurBuySell *
				100 *
				(this.minEurBuy / this.minRubBuy)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				this.valEurBuySell * this.minEurBuy
			).toFixed(this.numAfterComma))
		);
	}

	public converterRubBuy(newValue: number): number {
		this.converterCalc();
		this.valRubBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				(this.valRubBuySell / 100) *
				(this.minRubBuy / this.minUsdBuy)
			).toFixed(this.numAfterComma)),
			(this.valEurBuySell = +(
				(this.valRubBuySell / 100) *
				(this.minRubBuy / this.minEurBuy)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				(this.valRubBuySell / 100) *
				this.minRubBuy
			).toFixed(this.numAfterComma))
		);
	}

	public converterBynBuy(newValue: number): number {
		this.converterCalc();
		this.valBynBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				this.valBynBuySell / this.minUsdBuy
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				(this.valBynBuySell * 100) /
				this.minRubBuy
			).toFixed(this.numAfterComma)),
			(this.valEurBuySell = +(
				this.valBynBuySell / this.minEurBuy
			).toFixed(this.numAfterComma))
		);
	}

	public converterUsdSell(newValue: number): number {
		this.converterCalc();
		this.valUsdBuySell = newValue;
		return (
			(this.valEurBuySell = +(
				this.valUsdBuySell *
				(this.minUsdSell / this.minEurSell)
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				this.valUsdBuySell *
				100 *
				(this.minUsdSell / this.minRubSell)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				this.valUsdBuySell * this.minUsdSell
			).toFixed(this.numAfterComma))
		);
	}

	public converterEurSell(newValue: number): number {
		this.converterCalc();
		this.valEurBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				this.valEurBuySell *
				(this.minEurSell / this.minUsdSell)
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				this.valEurBuySell *
				100 *
				(this.minEurSell / this.minRubSell)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				this.valEurBuySell * this.minEurSell
			).toFixed(this.numAfterComma))
		);
	}

	public converterRubSell(newValue: number): number {
		this.converterCalc();
		this.valRubBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				(this.valRubBuySell / 100) *
				(this.minRubSell / this.minUsdSell)
			).toFixed(this.numAfterComma)),
			(this.valEurBuySell = +(
				(this.valRubBuySell / 100) *
				(this.minRubSell / this.minEurSell)
			).toFixed(this.numAfterComma)),
			(this.valBynBuySell = +(
				(this.valRubBuySell / 100) *
				this.minRubSell
			).toFixed(this.numAfterComma))
		);
	}

	public converterBynSell(newValue: number): number {
		this.converterCalc();
		this.valBynBuySell = newValue;
		return (
			(this.valUsdBuySell = +(
				this.valBynBuySell / this.minUsdSell
			).toFixed(this.numAfterComma)),
			(this.valRubBuySell = +(
				(this.valBynBuySell * 100) /
				this.minRubSell
			).toFixed(this.numAfterComma)),
			(this.valEurBuySell = +(
				this.valBynBuySell / this.minEurSell
			).toFixed(this.numAfterComma))
		);
	}
}
