import {Component, Input}       from '@angular/core';
import {FormGroup}              from "@angular/forms";
import {GENDER, MARITAL_STATUS} from "./home";

@Component({
    selector: 'borrower',
    templateUrl: 'app/home/borrower.component.html'
})
export class BorrowerComponent{

    genders = GENDER;
    maritalStatuses = MARITAL_STATUS;

    @Input('group') public form: FormGroup;
}

