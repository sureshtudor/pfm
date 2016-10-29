import {Component, OnInit}                    from '@angular/core';
import {FormBuilder, FormGroup, Validators}   from '@angular/forms';
import {Router, ActivatedRoute}               from '@angular/router';
import {BasicValidators}                      from '../shared/basicValidators';
import {Trade, TRADE_TYPES}                   from './trade'
import {TradeService}                         from './trade.service'

@Component({
    templateUrl: 'app/trades/trade-form.component.html'
})
export class TradeFormComponent implements OnInit {
    form: FormGroup;
    title: string;
    tradeTypes = TRADE_TYPES;

    constructor(private _fb: FormBuilder,
                private _router: Router,
                private _route: ActivatedRoute,
                private _service: TradeService)
    {
        this.form = this._fb.group({
            id: '',
            acctname: ['', Validators.required],
            acctnum: '',
            type: null,
            segment: this._fb.group({
                pfmFileId: '',
                isVerified: false,
                isDeleted: false,
                comments: ''
            })
        });
    }

    ngOnInit() {
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];
            this.title = id ? "Edit Trade" : "New Trade";

            if (!id) {
                // set pfmFileId for new Trade.
                let cachedFileId = localStorage.getItem('pfmFileId');
                this.form.controls['segment'].patchValue({pfmFileId: cachedFileId});
                return;
            }

            this._service.getTrade(id)
                .subscribe(
                    trade => this.load(trade),
                    response => {
                        if (response.status == 404) {
                            this._router.navigate(['NotFound']);
                        }
                    });
        });
    }

    load(trade: Trade) {
        // console.log('Load trade: ' + JSON.stringify(trade));
        this.form.setValue(trade, {onlySelf: true});
    }

    save(trade: Trade) {
        // console.log('Save trade: ' + JSON.stringify(trade));
        var result;

        if (trade.id)
            result = this._service.updateTrade(trade);
        else
            result = this._service.addTrade(trade);

        result.subscribe(x => {
            this.form.markAsPristine();
            this._router.navigate(['trades']);
        });
    }
}