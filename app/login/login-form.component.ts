import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService, IUser } from './authentication.service'

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;
    errorMsg: string;

    constructor(
        private _service: AuthenticationService,
        private _fb: FormBuilder) {
    }

    ngOnInit() {
        let emailRegex = `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`;
        this.loginForm = this._fb.group({
            email: ['studor@corelogic.com', [<any>Validators.required, <any>Validators.pattern(emailRegex)]],
            password: ['password', [<any>Validators.required, <any>Validators.minLength(5)]],
        });
    }

    login(user: IUser) {
        if (!this._service.login(user)) {
            this.errorMsg = 'Failed to login';
        }
        this.loginForm.reset();
    }
}