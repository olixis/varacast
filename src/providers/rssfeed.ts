import { Injectable } from '@angular/core';
import * as Feed from 'rss-parser';

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
