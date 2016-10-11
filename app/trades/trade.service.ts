import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/map';

import { AppSettings } from '../app.config';

@Injectable()
export class TradeService {
	private _url = AppSettings.TRADE_URL;

	constructor(private _http: Http) {
	}

	getTrades(fileId) {
		var fileUrl = this._url + "/?segment.fileId=" + fileId;
		return this._http.get(fileUrl).map(res => res.json());
	}

	getTrade(tradeId) {
		return this._http.get(this.getTradeUrl(tradeId))
			.map(res => res.json());
	}

	addTrade(trade) {
		return this._http.post(this._url, JSON.stringify(trade))
			.map(res => res.json());
	}

	updateTrade(trade) {
		return this._http.put(this.getTradeUrl(trade.id), JSON.stringify(trade))
			.map(res => res.json());
	}

	deleteTrade(tradeId) {
		return this._http.delete(this.getTradeUrl(tradeId))
			.map(res => res.json());
	}

	private getTradeUrl(tradeId) {
		return this._url + "/" + tradeId;
	}

}