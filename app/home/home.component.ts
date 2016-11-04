import {Component, OnInit}  from '@angular/core';
import {IBorrower}          from "./home";

@Component({
    templateUrl: 'app/home/home.component.html',
})
export class HomeComponent implements OnInit {
    pfmFileId: number;

    constructor() {
    }

    ngOnInit() {
        this.pfmFileId = Number(localStorage.getItem("pfmFileId"));
    }

    appChangeListener(borrower: IBorrower) {
        console.log('APP');
        console.log('Fullname:' + borrower.lastName +', '+ borrower.firstName);
        console.log('SSN:' + borrower.ssn);
    }

    capChangeListener(borrower: IBorrower) {
        console.log('CAP');
        console.log('Fullname:' + borrower.lastName +', '+ borrower.firstName);
        console.log('SSN:' + borrower.ssn);
    }
}