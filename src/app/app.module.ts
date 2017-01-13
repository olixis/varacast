import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TelaprincipalPage } from '../pages/telaprincipal/telaprincipal';
import { CardListPage } from '../pages/cardlist/cardlist';
import { RssFeed } from '../providers/rssfeed';
import { LOCALE_ID } from '@angular/core';
@NgModule({
  declarations: [
    MyApp,
    TelaprincipalPage,
    CardListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TelaprincipalPage,
    CardListPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},{ provide: LOCALE_ID, useValue: "pt-BR" },RssFeed]
})
export class AppModule {}
