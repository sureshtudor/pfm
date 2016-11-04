import {NgModule}                           from '@angular/core';
import {CommonModule}                       from '@angular/common'
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {RouterModule}                       from '@angular/router';

import {SharedModule}                       from "../shared/shared.module";

import {HomeService}                        from "./home.service";
import {HomeComponent}                      from "./home.component";
import {BorrowerComponent}                  from "./borrower.component";

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        BorrowerComponent
    ],
    exports: [
        HomeComponent
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule {
}