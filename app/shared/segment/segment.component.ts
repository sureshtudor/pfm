import {Component, Input, Output, EventEmitter}       from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {STATUS_TYPE, ISegment}  from "./segment";

@Component({
    selector: 'segment',
    templateUrl: 'app/shared/segment/segment.component.html'
})
export class SegmentComponent {
    form: FormGroup;
    @Input() model: ISegment;
    @Input() hideRemark: boolean;
    @Input() hideChargeable: boolean;
    @Output() changeEvent: EventEmitter<any> = new EventEmitter<any>();

    statusTypes = STATUS_TYPE;

    constructor(private _fb: FormBuilder) {
        this.form = this._fb.group({
            overridden: false,
            modified: false,
            supplement: false,
            verified: false,
            deleted: false,
            printable: false,
            chargeable: false,
            status: 4,
            remark: ''
        });
    }

    onValueChanged($event) {
        this.changeEvent.emit($event);
    }
}
