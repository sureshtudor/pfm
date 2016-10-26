import {Component, OnInit, OnDestroy}   from '@angular/core';
import {Router}                         from '@angular/router';

import {AuthenticationService}          from '../login/authentication.service'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {

    loginLogoutText: string;
    userName: string;

    constructor(
        private _router: Router,
        private _service: AuthenticationService) {
    }

    ngOnInit() {
        this.setLoginLogoutText(this._service.isLoggedIn());
        //Subscribe to events
        this._service.loggedInEvent.subscribe(x => this.loginAction(x));
        this._service.loggedOutEvent.subscribe(() => this.logoutAction());
    }

    ngOnDestroy() {
        this._service.loggedInEvent.unsubscribe();
        this._service.loggedOutEvent.unsubscribe();
    }

    loginOrOut() {
        if (this._service.isLoggedIn()) { //logout
            this._service.logout();
        }
        else {
            this._router.navigate(['/login']);
        }
    };

    setLoginLogoutText(loggedIn: boolean) {
        this.loginLogoutText = (loggedIn) ? 'Logout' : 'Login';
    }

    private loginAction(username: string) {
        this.userName = username;
        this.setLoginLogoutText(true);
    }

    private logoutAction() {
        this.userName = '';
        this.setLoginLogoutText(false);
    }
}