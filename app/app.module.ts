import {NgModule}                       from '@angular/core';
import {BrowserModule}                  from '@angular/platform-browser';
import {NgbModule}                      from '@ng-bootstrap/ng-bootstrap';
// modules..
import {HomeModule}                     from './home/home.module';
import {LoginModule}                    from './login/login.module';
import {TradesModule, tradesRouting}    from './trades/trades.module'
import {SharedModule}                   from './shared/shared.module';
import {UsersModule}                    from './users/users.module';
import {PostsModule}                    from './posts/posts.module';
// components..
import {AppComponent}                   from './app.component';
import {NavBarComponent}                from './navbar/navbar.component';
import {NotFoundComponent}              from './navbar/not-found.component';
// routes..
import {usersRouting}                   from './users/users.routing';
import {postsRouting}                   from './posts/posts.routing';
import {routing}                        from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        HomeModule,
        LoginModule,
        TradesModule,
        SharedModule,
        UsersModule,
        PostsModule,
        usersRouting,
        tradesRouting,
        postsRouting,
        routing
    ],
    exports: [
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}