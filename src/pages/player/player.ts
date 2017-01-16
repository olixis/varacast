import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Player page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-player',
  templateUrl: 'player.html'
})
export class PlayerPage {

  public mp3Link: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.mp3Link = navParams.get('URL');
  }



}
