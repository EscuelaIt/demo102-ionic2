import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UsersPage } from '../pages/users/users';
import { HeroesPage } from '../pages/heroes/heroes';

import { MyUserComponent } from '../components/my-user/my-user';
import { MyHeroComponent } from '../components/my-hero/my-hero';
import { MyHighlightDirective } from '../directives/my-highlight/my-highlight';
import { ReversePipe } from '../pipes/reverse';

import { HeroeService } from '../providers/heroe-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    HeroesPage,
    MyUserComponent,
    MyHeroComponent,
    MyHighlightDirective,
    ReversePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    UsersPage,
    HeroesPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroeService
  ]
})
export class AppModule {}
