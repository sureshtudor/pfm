import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';
import {HomeComponent}  from "./home.component";

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
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