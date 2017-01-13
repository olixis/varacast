import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssFeed } from '../../providers/rssfeed';

@Component({
  selector: 'cardlist',
  templateUrl: 'cardlist.html'
})
export class CardListPage {
  public cards = [];

  public alert = (url) => window.open(url);

  constructor(public navCtrl: NavController, public rssParser: RssFeed) {
    rssParser.feed('http://feeds.feedburner.com/varacast?format=xml')
      .then((result) => { console.log(result); this.cards = result.feed.entries; })
      .catch((err) => { console.log(err); })
  }

}
