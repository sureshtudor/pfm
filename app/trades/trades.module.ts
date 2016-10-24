import {NgModule}                           from '@angular/core';
import {CommonModule}                       from '@angular/common';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {RouterModule}                       from '@angular/router';
import {HttpModule}                         from '@angular/http';

import {TradeFormComponent}                 from './trade-form.component';
import {TradesComponent}                    from './trades.component';
import {TradeService}                       from './trade.service';

import {PreventUnsavedChangesGuard}         from '../shared/prevent-unsaved-changes-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        TradeFormComponent,
        TradesComponent
    ],
    exports: [
        TradeFormComponent,
        TradesComponent
    ],
    providers: [
        TradeService,
        PreventUnsavedChangesGuard
    ]
})
export class TradesModule {
}

export const tradesRouting = RouterModule.forChild([
    {
        path: 'trades/:id',
        component: TradeFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'trades/new',
        component: TradeFormComponent,
        canDeactivate: [PreventUnsavedChangesGuard]
    },
    {
        path: 'trades',
        component: TradesComponent
    }
]);
