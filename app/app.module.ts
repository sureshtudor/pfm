import {NgModule}                       from '@angular/core';
import {BrowserModule}                  from '@angular/platform-browser';
import {NgbModule}                      from '@ng-bootstrap/ng-bootstrap';
// app modules..
import {NavbarModule}                   from "./navbar/navbar.module";
import {HomeModule}                     from './home/home.module';
import {LoginModule}                    from './login/login.module';
import {SearchModule}                   from "./search/search.module";
import {TradesModule, tradesRouting}    from './trades/trades.module'
import {SharedModule}                   from './shared/shared.module';
import {UsersModule}                    from './users/users.module';
import {PostsModule}                    from './posts/posts.module';
// components..
import {AppComponent}                   from './app.component';
// routes..
import {usersRouting}                   from './users/users.routing';
import {postsRouting}                   from './posts/posts.routing';
import {routing}                        from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        NavbarModule,
        HomeModule,
        LoginModule,
        SearchModule,
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
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}