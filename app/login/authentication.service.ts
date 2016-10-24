import {Injectable, Output, EventEmitter}   from '@angular/core';
import {Http}                               from '@angular/http';
import {AppSettings}                        from '../app.config';

export interface IUser {
    name?: string;
    email: string;
    password: string;
    pfmFileId?: number;
}

@Injectable()
export class AuthenticationService {

    private _url = AppSettings.LOGINS_URL;

    @Output()
    loggedInEvent: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    loggedOutEvent: EventEmitter<{}> = new EventEmitter<{}>();

    constructor(private _http: Http) {
    }

    login(user: IUser) {
        console.log('Auth.login()' + JSON.stringify(user));
        let authUrl = this._url + "?email=" + user.email + "&password=" + user.password;

        return this._http.get(authUrl).map(res => this.authenticate(res.json()));
    }

    private authenticate(users: IUser[]) {
        if (users != null && users.length > 0) {
            localStorage.setItem("user", users[0].name);
            localStorage.setItem("pfmFileId", String(users[0].pfmFileId));
            // set event..
            this.loggedInEvent.emit(users[0].name);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("pfmFileId");
        // set event..
        this.loggedOutEvent.emit();
    }

    isLoggedIn(): boolean {
        return localStorage.getItem("user") != null;
    }
}