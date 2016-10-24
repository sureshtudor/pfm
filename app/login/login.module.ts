import {NgModule}                           from '@angular/core';
import {CommonModule}                       from '@angular/common';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {ModalModule}                        from 'ng2-bootstrap/ng2-bootstrap';

import {AuthenticationService}              from './authentication.service';
import {LoginFormComponent}                 from './login-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule
    ],
    declarations: [
        LoginFormComponent
    ],
    exports: [
        LoginFormComponent
    ],
    providers: [
        AuthenticationService
    ]
})
export class LoginModule {
}