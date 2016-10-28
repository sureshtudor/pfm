import {Component, Input}       from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
    selector: 'segment',
    templateUrl: 'app/shared/segment/segment.component.html'
})
export class SegmentComponent {

    @Input() public form: FormGroup;

    @Input() public hideRemark: boolean;

    @Input() public hideChargeable: boolean;

    constructor(private _fb: FormBuilder) {

        this.form = this._fb.group({
            overridden: false,
            modified: false,
            supplement: false,
            verified: false,
            deleted: false,
            printable: false,
            chargeable: false,
            stauts: 4,
            remark: ''
        });
    }
}
