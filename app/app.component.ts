import {Component, ViewContainerRef} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {

    private viewContainerRef: ViewContainerRef;

    public constructor(viewContainerRef:ViewContainerRef) {
        // You need this small hack in order to catch application root view container ref (ng2-bootstrap)
        this.viewContainerRef = viewContainerRef;
    }
}