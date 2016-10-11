import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service'

@Component({
    selector: 'home',
    providers: [AuthenticationService],
    template: `
        <h1>Home</h1>
        <div class="container" >
            <div class="content">
                <span>Congratulations {{authenticatedUser}}, you have successfully logged in!!</span>
                <br />
                <a (click)="logout()" href="#">Click Here to logout</a>
            </div>
        </div>
   	`
})
export class HomeComponent implements OnInit {
    authenticatedUser: string;

    constructor(private _service: AuthenticationService) {
    }

    ngOnInit() {
        this._service.checkCredentials();
        this.authenticatedUser = localStorage.getItem('user');
    }

    logout() {
        this._service.logout();
    }
}