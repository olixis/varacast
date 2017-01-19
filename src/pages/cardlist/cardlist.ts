import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssFeed } from '../../providers/rssfeed';
import { PlayerPage } from '../player/player';

@Component({
  selector: 'cardlist',
  templateUrl: 'cardlist.html'
})
export class CardListPage {
  public cards = [];

  constructor(public navCtrl: NavController, public rssParser: RssFeed) {
    rssParser.feed('http://feeds.feedburner.com/varacast?format=xml')
      .then((result) => {this.cards = result.feed.entries; })
      .catch((err) => { console.log(err); })
  }

    public play = (url) => this.navCtrl.push(PlayerPage,{URL:url},{animate:true,animation:'ios-transition'});

}
