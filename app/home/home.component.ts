import {Component, OnInit}      from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {IBorrower, Identity}    from "./home";
import {BorrowerComponent} from "./borrower.component";

@Component({
    templateUrl: 'app/home/home.component.html'
})
export class HomeComponent implements OnInit {
    form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            app: this.initBorrower(),
            cap: this.initBorrower()
        });
    }

    ngOnInit() {
    }

    load(identity: Identity) {
        this.form.setValue(identity, {onlySelf: true});
    }

    save(identity: Identity) {
    }

    initBorrower() {
        return this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            middleName: '',
            ssn: [null, Validators.required],
            gender: '',
            marital: null,
            dob: '',
            age: null,
            dep: null,
            phone: null
        });
    }
}