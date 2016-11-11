import {Component, OnInit}  from '@angular/core';
import {TradeService}       from './trade.service';

@Component({
    templateUrl: 'app/trades/trades.component.html'
})
export class TradesComponent implements OnInit {
    trades: any[];

    constructor(private _service: TradeService) {
    }

    ngOnInit() {
        let cachedPfmFileId = localStorage.getItem("pfmFileId");
        this._service.getTrades(cachedPfmFileId)
            .subscribe(trades => this.trades = trades);
    }

    deleteTrade(trade) {
        if (confirm("Are you sure you want to delete '" + trade.acctname + "' trade?")) {
            var index = this.trades.indexOf(trade);
            // Here, with the splice method, we remove 1 object at the given index.
            this.trades.splice(index, 1);

            this._service.deleteTrade(trade.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete the trade.");
                        this.trades.splice(index, 0, trade);
                    });
        }
    }
}