import {Injectable, Output, EventEmitter}   from '@angular/core';
import {Http}                               from '@angular/http';
import {AppSettings}                        from '../app.config';

export interface IUser {
    id?: number;
    name?: string;
    email: string;
    password: string;
}

@Injectable()
export class AuthenticationService {

    private _url = AppSettings.LOGINS_URL;

    @Output()
    loggedInEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _http: Http) {
    }

    login(user: IUser) {
        console.log('Auth.login()' + JSON.stringify(user));
        let authUrl = this._url + "?email=" + user.email + "&password=" + user.password;

        return this._http.get(authUrl).map(res => this.authenticate(res.json()));
    }

    private authenticate(users: IUser[]) {
        if (users != null && users.length > 0) {
            let user = users[0];
            localStorage.setItem("userId", String(user.id));
            this.loggedInEvent.emit(user.name);
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("userid");
    }
}