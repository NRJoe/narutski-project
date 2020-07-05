import { Component, OnInit, Input } from '@angular/core';
import { BanksComponent } from '../banks.component';
import { ActivatedRoute } from '@angular/router';
import { BanksService } from 'src/app/services/banks.service';

@Component({
	selector: 'app-banks-item',
	templateUrl: './banks-item.component.html',
	styleUrls: ['./banks-item.component.scss'],
})
export class BanksItemComponent {
	constructor(
		public _banks: BanksComponent,
		public _banksService: BanksService,
		public _activatedRoute: ActivatedRoute
	) {
		this._activatedRoute.params.subscribe((params: any) => {
			const bankId: number = params ? params.id : null;
			if (
				bankId <= _banksService.banks[_banksService.banks.length - 1].id
			) {
				_banksService.currBankId = params.id - 1;
			}
		});
	}
}
