import {NgModule}                           from '@angular/core';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {RouterModule}                       from '@angular/router';
import {HomeComponent}                      from "./home.component";
import {BorrowerComponent}                  from "./borrower.component";

@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        BorrowerComponent,
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    providers: [
    ]
})
export class HomeModule {
}