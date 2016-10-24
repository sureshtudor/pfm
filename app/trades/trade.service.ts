import { Injectable }     							from '@angular/core';
import { Http, Response, Headers, RequestOptions } 	from '@angular/http';

import {Observable} 								from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Trade }       from './trade';
import { AppSettings } from '../app.config';

@Injectable()
export class TradeService {
	private _url = AppSettings.TRADE_URL;

	constructor(private _http: Http) {
	}

	private getTradeUrl(id) {
		return this._url + "/" + id;
	}

	getTrades(pfmFileId: number): Observable<Trade[]> {
		var fileUrl = this._url + "/?segment.pfmFileId=" + pfmFileId;
		return this._http.get(fileUrl)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error!!'));
	}

	getTrade(id: number): Observable<Trade> {
		return this._http.get(this.getTradeUrl(id)) // ...using get request
			.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error:any) => Observable.throw(error.json().error || 'Server error!!'));//...errors if any
	}

	addTrade(trade: Trade): Observable<Trade> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this._http.post(this._url, JSON.stringify(trade), options) // ...using post request
			.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error:any) => Observable.throw(error.json().error || 'Server error!!')); //...errors if any
	}

	updateTrade(trade: Trade): Observable<Trade> {
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option
		return this._http.put(this.getTradeUrl(trade.id), JSON.stringify(trade), options)
			.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error:any) => Observable.throw(error.json().error || 'Server error!!')); //...errors if any
	}

	deleteTrade(id: number): Observable<Trade[]>  {
		return this._http.delete(this.getTradeUrl(id)) // ...using put request
			.map((res:Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error:any) => Observable.throw(error.json().error || 'Server error!!')); //...errors if any
	}
}