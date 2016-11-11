import {Injectable}                 from '@angular/core';
import {Http, Response,
        Headers, RequestOptions}    from '@angular/http';
import {Observable}                 from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IBorrower}                  from './home';
import {AppSettings}                from '../app.config';

@Injectable()
export class HomeService {
    private _borrowerUrl = AppSettings.BORROWER_URL;

    constructor(private _http: Http) {
    }

    private getBorrowerUrl(id) {
        return this._borrowerUrl + "/" + id;
    }

    getBorrowerById(id: number): Observable<IBorrower> {
        return this._http.get(this.getBorrowerUrl(id)) // ...using get request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error!!'));//...errors if any
    }

    getBorrower(pfmFileId: string, isCoApp: boolean): Observable<IBorrower[]> {
        var url = this._borrowerUrl + "?pfmFileId=" + pfmFileId + "&isCoApp=" + isCoApp;
        return this._http.get(url) // ...using get request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error!!'));//...errors if any
    }

    addBorrower(borrower: IBorrower): Observable<IBorrower> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post(this._borrowerUrl, JSON.stringify(borrower), options) // ...using post request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error!!')); //...errors if any
    }

    updateBorrower(borrower: IBorrower): Observable<IBorrower> {
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option
        return this._http.put(this.getBorrowerUrl(borrower.id), JSON.stringify(borrower), options)
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error!!')); //...errors if any
    }
}
