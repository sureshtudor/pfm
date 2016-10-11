import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

export interface IUser {
    name?: string;
    email: string;
    password: string;
}

var users: IUser[] = [
     {name: 'Administrator', email: 'admin@corelogic.com', password:'password'},
     {name: 'Suresh Tudor', email: 'studor@corelogic.com', password:'password'},
 ];

@Injectable()
export class AuthenticationService {

    constructor(
        private _router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }

    login(user: IUser) {
        let authenticatedUser = users.find(u => u.email === user.email);

        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser.name);
            this._router.navigate(['/']);
            return true;
        }
        return false;
    }

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['/login']);
        }
    }
}