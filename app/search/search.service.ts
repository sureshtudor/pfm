import {Injectable, Output,
        EventEmitter}       from '@angular/core';
import {Http}               from '@angular/http';
import {Observable}         from 'rxjs/Rx';
import {AppSettings}        from '../app.config';

export interface IPfmFile {
    id: number,
    pfmFileId: string,
    status: string,
    product: string
}

@Injectable()
export class SearchService {

    private _url = AppSettings.PFMFILE_URL;

    @Output()
    fileSelectedEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _http: Http) {
    }

    private getPfmFileUrl(id) {
        return this._url + "/" + id;
    }

    getPfmFile(id: number): Observable<IPfmFile> {
        return this._http.get(this.getPfmFileUrl(id)) // ...using get request
            .map(res => res.json()) // ...and calling .json() on the response to return data
            .catch(error => Observable.throw(error.json().error || 'Server error!!'));//...errors if any
    }

    getPfmFiles(): Observable<IPfmFile[]> {
        return this._http.get(this._url)
            .map(res => res.json())
            .catch(error => Observable.throw(error.json().error || 'Server error!!'));
    }

    fileSelected(file: IPfmFile) {
        localStorage.setItem("pfmFileId", file.pfmFileId);
        localStorage.setItem("isReadOnly", "false"); // todo: decide based on file status.
        this.fileSelectedEvent.emit(file.pfmFileId);
    }

    fileReset() {
        localStorage.removeItem("pfmFileId");
        localStorage.removeItem("isReadOnly");
        this.fileSelectedEvent.emit("Search");
    }
}
