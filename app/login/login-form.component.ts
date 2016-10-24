import {Component, OnInit, AfterViewInit, ViewChild}    from '@angular/core';
import {FormBuilder, FormGroup, Validators}             from '@angular/forms';
import {Router}                                         from '@angular/router';
import {AuthenticationService, IUser}                   from './authentication.service'
import {BasicValidators}                                from '../shared/basicValidators'
import {ModalDirective}                                 from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'login-form',
    templateUrl: 'app/login/login-form.component.html'
})
export class LoginFormComponent implements OnInit, AfterViewInit {
    loginForm: FormGroup;
    errorMsg: string;

    @ViewChild('smModal')
    public smModal:ModalDirective;

    constructor(private _fb: FormBuilder,
                private _router: Router,
                private _service: AuthenticationService) {
    }

    ngOnInit() {
        this.loginForm = this._fb.group({
            email: ['studor@corelogic.com', BasicValidators.email],
            password: ['password', [Validators.required, Validators.minLength(5)]]
        });
    }

    ngAfterViewInit() {
        this.smModal.show();
    }

    login(user: IUser) {
        this._service.login(user)
            .subscribe(
                data => {
                    if (data) {
                        this.closeDialog();
                    }
                    else {
                        this.errorMsg = 'Login Failure!';
                    }
                },
                error => {
                    this.errorMsg = error;
                });
    }

    closeDialog() {
        this.smModal.hide();
        this._router.navigate(['/']);
    }
}
