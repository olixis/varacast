import { Injectable } from '@angular/core';
import * as Feed from 'rss-parser';

/*
  Generated class for the Rssfeed provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RssFeed {

  constructor() { }
  public feed(url: String): Promise<any> {
    return new Promise((resolve, reject) => {
      Feed.parseURL(url, (err, parsed) => {
        err ? reject(err) : resolve(parsed);
      })
    });
  }

}
