import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
        <template ngbModalContainer></template>
    `
})
export class AppComponent {
}