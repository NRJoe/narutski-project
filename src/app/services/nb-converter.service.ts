import { Injectable } from '@angular/core';
import { ExchangeRatesService } from './exchange-rates.service';
import { BanksService } from './banks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class NbConverterService {
	public valUsd: number;
	public valEur: any;
	public valRub: number;
	public valByn: number;
	public valUah: number;
	public valCny: number;
	public valGbp: number;
	public valJpy: number;
	public valPln: number;
	public valKzt: number;

	public numAfterComma: number = 3;

	public arrOfCurr: any[] = [
		{ name: 'Выберите валюту:', val: '' },
		{ name: 'UAH (украинская гривна)', val: 'valUah' },
		{ name: 'CNY (китайский юань)', val: 'valCny' },
		{ name: 'GBP (английский фунт)', val: 'valGbp' },
		{ name: 'JPY (японский йен)', val: 'valJpy' },
		{ name: 'PLN (польский злотый)', val: 'valPln' },
		{ name: 'KZT (казахстанский тенге)', val: 'valKzt' },
	];
	public arrOfCurrSet: any = new Set([]);
	public arrOfCurr2: any[] = [];
	public usd: number = this._exchangeRatesService.usdRates.Cur_OfficialRate;
	public eur: number = this._exchangeRatesService.eurRates.Cur_OfficialRate;
	public rub: number = this._exchangeRatesService.rubRates.Cur_OfficialRate;
	public uah: number = this._exchangeRatesService.uahRates.Cur_OfficialRate;
	public cny: number = this._exchangeRatesService.cnyRates.Cur_OfficialRate;
	public gbp: number = this._exchangeRatesService.gbpRates.Cur_OfficialRate;
	public jpy: number = this._exchangeRatesService.jpyRates.Cur_OfficialRate;
	public pln: number = this._exchangeRatesService.plnRates.Cur_OfficialRate;
	public kzt: number = this._exchangeRatesService.kztRates.Cur_OfficialRate;

	constructor(
		public _exchangeRatesService: ExchangeRatesService,
		public _banksService: BanksService
	) {}

	public converterUsd(newValue: number): number {
		this.valUsd = newValue;
		return (
			(this.valEur = +(this.valUsd * (this.usd / this.eur)).toFixed(
				this.numAfterComma
			)),
			(this.valRub = +(this.valUsd * 100 * (this.usd / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +(this.valUsd * this.usd).toFixed(
				this.numAfterComma
			)),
			(this.valUah = +(this.valUsd * 100 * (this.usd / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(this.valUsd * 10 * (this.usd / this.cny)).toFixed(
				this.numAfterComma
			)),
			(this.valGbp = +(this.valUsd * (this.usd / this.gbp)).toFixed(
				this.numAfterComma
			)),
			(this.valJpy = +(this.valUsd * 100 * (this.usd / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(this.valUsd * 10 * (this.usd / this.pln)).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +(
				this.valUsd *
				1000 *
				(this.usd / this.kzt)
			).toFixed(this.numAfterComma))
		);
	}

	public converterEur(newValue: number): number {
		this.valEur = newValue;
		return (
			(this.valUsd = +(this.valEur * (this.eur / this.usd)).toFixed(
				this.numAfterComma
			)),
			(this.valRub = +(this.valEur * 100 * (this.eur / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +(this.valEur * this.eur).toFixed(
				this.numAfterComma
			)),
			(this.valUah = +(this.valEur * 100 * (this.eur / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(this.valEur * 10 * (this.eur / this.cny)).toFixed(
				this.numAfterComma
			)),
			(this.valGbp = +(this.valEur * (this.eur / this.gbp)).toFixed(
				this.numAfterComma
			)),
			(this.valJpy = +(this.valEur * 100 * (this.eur / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(this.valEur * 10 * (this.eur / this.pln)).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +(
				this.valEur *
				1000 *
				(this.eur / this.kzt)
			).toFixed(this.numAfterComma))
		);
	}

	public converterRub(newValue: number): number {
		this.valRub = newValue;
		return (
			(this.valUsd = +(
				(this.valRub / 100) *
				(this.rub / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valEur = +(
				(this.valRub / 100) *
				(this.rub / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valByn = +((this.valRub / 100) * this.rub).toFixed(
				this.numAfterComma
			)),
			(this.valUah = +(this.valRub * (this.rub / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(
				(this.valRub / 10) *
				(this.rub / this.cny)
			).toFixed(this.numAfterComma)),
			(this.valGbp = +(
				(this.valRub / 100) *
				(this.rub / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valJpy = +(this.valRub * (this.rub / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(
				(this.valRub / 10) *
				(this.rub / this.pln)
			).toFixed(this.numAfterComma)),
			(this.valKzt = +(this.valRub * 10 * (this.rub / this.kzt)).toFixed(
				this.numAfterComma
			))
		);
	}

	public converterByn(newValue: number): number {
		this.valByn = newValue;
		return (
			(this.valUsd = +(this.valByn / this.usd).toFixed(
				this.numAfterComma
			)),
			(this.valRub = +((this.valByn * 100) / this.rub).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(this.valByn / this.eur).toFixed(
				this.numAfterComma
			)),
			(this.valUah = +((this.valByn * 100) / this.uah).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +((this.valByn * 10) / this.cny).toFixed(
				this.numAfterComma
			)),
			(this.valGbp = +(this.valByn / this.gbp).toFixed(
				this.numAfterComma
			)),
			(this.valJpy = +((this.valByn * 100) / this.jpy).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +((this.valByn * 10) / this.pln).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +((this.valByn * 1000) / this.kzt).toFixed(
				this.numAfterComma
			))
		);
	}

	public converterUah(newValue: number): number {
		this.valUah = newValue;
		return (
			(this.valUsd = +(
				(this.valUah / 100) *
				(this.uah / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(this.valUah * (this.uah / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +((this.valUah / 100) * this.uah).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(
				(this.valUah / 100) *
				(this.uah / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valCny = +(
				(this.valUah / 10) *
				(this.uah / this.cny)
			).toFixed(this.numAfterComma)),
			(this.valGbp = +(
				(this.valUah / 100) *
				(this.uah / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valJpy = +(this.valUah * (this.uah / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(
				(this.valUah / 10) *
				(this.uah / this.pln)
			).toFixed(this.numAfterComma)),
			(this.valKzt = +(this.valUah * 10 * (this.uah / this.kzt)).toFixed(
				this.numAfterComma
			))
		);
	}
	public converterCny(newValue: number): number {
		this.valCny = newValue;
		return (
			(this.valUsd = +(
				(this.valCny / 10) *
				(this.cny / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(this.valCny * 10 * (this.cny / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +((this.valCny / 10) * this.cny).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(
				(this.valCny / 10) *
				(this.cny / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valUah = +(this.valCny * 10 * (this.cny / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valGbp = +(
				(this.valCny / 10) *
				(this.cny / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valJpy = +(this.valCny * 10 * (this.cny / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(this.valCny * (this.cny / this.pln)).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +(this.valCny * 100 * (this.cny / this.kzt)).toFixed(
				this.numAfterComma
			))
		);
	}

	public converterGbp(newValue: number): number {
		this.valGbp = newValue;
		return (
			(this.valUsd = +(this.valGbp * (this.gbp / this.usd)).toFixed(
				this.numAfterComma
			)),
			(this.valRub = +(this.valGbp * 100 * (this.gbp / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +(this.valGbp * this.gbp).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(this.valGbp * (this.gbp / this.eur)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(this.valGbp * 10 * (this.gbp / this.cny)).toFixed(
				this.numAfterComma
			)),
			(this.valJpy = +(this.valGbp * 100 * (this.gbp / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valPln = +(this.valGbp * 10 * (this.gbp / this.pln)).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +(
				this.valGbp *
				1000 *
				(this.gbp / this.kzt)
			).toFixed(this.numAfterComma))
		);
	}

	public converterJpy(newValue: number): number {
		this.valJpy = newValue;
		return (
			(this.valUsd = +(
				(this.valJpy / 100) *
				(this.jpy / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(this.valJpy * (this.jpy / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +((this.valJpy / 100) * this.jpy).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(
				(this.valJpy / 100) *
				(this.jpy / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valUah = +(this.valJpy * (this.jpy / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(
				(this.valJpy / 10) *
				(this.jpy / this.cny)
			).toFixed(this.numAfterComma)),
			(this.valGbp = +(
				(this.valJpy / 100) *
				(this.jpy / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valPln = +(
				(this.valJpy / 10) *
				(this.jpy / this.pln)
			).toFixed(this.numAfterComma)),
			(this.valKzt = +(this.valJpy * 10 * (this.jpy / this.kzt)).toFixed(
				this.numAfterComma
			))
		);
	}

	public converterPln(newValue: number): number {
		this.valPln = newValue;
		return (
			(this.valUsd = +(
				(this.valPln / 10) *
				(this.pln / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(this.valPln * 10 * (this.pln / this.rub)).toFixed(
				this.numAfterComma
			)),
			(this.valByn = +((this.valPln / 10) * this.pln).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(
				(this.valPln / 10) *
				(this.pln / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valUah = +(this.valPln * 10 * (this.pln / this.uah)).toFixed(
				this.numAfterComma
			)),
			(this.valCny = +(this.valPln * (this.pln / this.cny)).toFixed(
				this.numAfterComma
			)),
			(this.valGbp = +(
				(this.valPln / 10) *
				(this.pln / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valJpy = +(this.valPln * 10 * (this.pln / this.jpy)).toFixed(
				this.numAfterComma
			)),
			(this.valKzt = +(this.valPln * 100 * (this.pln / this.kzt)).toFixed(
				this.numAfterComma
			))
		);
	}

	public converterKzt(newValue: number): number {
		this.valKzt = newValue;
		return (
			(this.valUsd = +(
				(this.valKzt / 1000) *
				(this.kzt / this.usd)
			).toFixed(this.numAfterComma)),
			(this.valRub = +(
				(this.valKzt / 10) *
				(this.kzt / this.rub)
			).toFixed(this.numAfterComma)),
			(this.valByn = +((this.valKzt / 1000) * this.kzt).toFixed(
				this.numAfterComma
			)),
			(this.valEur = +(
				(this.valKzt / 1000) *
				(this.kzt / this.eur)
			).toFixed(this.numAfterComma)),
			(this.valUah = +(
				(this.valKzt / 10) *
				(this.kzt / this.uah)
			).toFixed(this.numAfterComma)),
			(this.valCny = +(
				(this.valKzt / 100) *
				(this.kzt / this.cny)
			).toFixed(this.numAfterComma)),
			(this.valGbp = +(
				(this.valKzt / 1000) *
				(this.kzt / this.gbp)
			).toFixed(this.numAfterComma)),
			(this.valJpy = +(
				(this.valKzt / 10) *
				(this.kzt / this.jpy)
			).toFixed(this.numAfterComma)),
			(this.valPln = +(
				(this.valKzt / 100) *
				(this.kzt / this.pln)
			).toFixed(this.numAfterComma))
		);
	}

	public selectChange(args: any): any {
		if (this.arrOfCurr2.find((i: any) => i === args.target.value) !== -1) {
			this.arrOfCurr2.push(args.target.value);
			this.arrOfCurrSet = [...new Set(this.arrOfCurr2)];
		} else if (this.arrOfCurr2.find((i: any) => i === null || undefined)) {
			this.arrOfCurr2.push(args.target.value);
			this.arrOfCurrSet = [...new Set(this.arrOfCurr2)];
		} else {
			this.arrOfCurr2 = this.arrOfCurr2;
			this.arrOfCurrSet = [...new Set(this.arrOfCurr2)];
		}
	}
}
