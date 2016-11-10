import {Component, OnInit, OnDestroy}   from '@angular/core';
import {Router}                         from '@angular/router';
import {NgbModal}                       from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService}          from '../login/authentication.service'
import {SearchComponent}                from "../search/search.component";
import {SearchService}                  from "../search/search.service";

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.component.html'
})
export class NavBarComponent implements OnInit, OnDestroy {

    loginLogoutText: string;
    selectedFileText: string;
    userName: string;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private searchService: SearchService,
        private searchModal: NgbModal) {
    }

    ngOnInit() {
        this.selectedFileText = 'Search';
        this.setLoginLogoutText(this.authService.isLoggedIn());
        //Subscribe to events
        this.authService.loggedInEvent.subscribe(x => this.loginAction(x));
        this.authService.loggedOutEvent.subscribe(() => this.logoutAction());
        this.searchService.fileSelectedEvent.subscribe(x => this.setSelectedFileText(x));
    }

    ngOnDestroy() {
        this.authService.loggedInEvent.unsubscribe();
        this.authService.loggedOutEvent.unsubscribe();
        this.searchService.fileSelectedEvent.unsubscribe();
    }

    setLoginLogoutText(loggedIn: boolean) {
        this.loginLogoutText = (loggedIn) ? 'Logout' : 'Login';
    }

    loginOrOut() {
        if (this.authService.isLoggedIn()) { //logout
            this.authService.logout();
        }
        else {
            this.router.navigate(['/login']);
        }
    };

    private loginAction(username: string) {
        this.userName = username;
        this.setLoginLogoutText(true);
    }

    private logoutAction() {
        this.userName = '';
        this.setLoginLogoutText(false);
        this.searchService.fileReset();
    }

    //********************* Search Modal **************************//
    openSearchModal() {
        this.searchModal.open(SearchComponent);
    }

    setSelectedFileText(pfmFileId: string) {
        this.selectedFileText = pfmFileId;
    }
}