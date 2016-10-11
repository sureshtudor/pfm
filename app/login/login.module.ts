import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';

import { IUser, AuthenticationService } from './authentication.service';
import { LoginFormComponent }   from './login-form.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
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