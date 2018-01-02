import {Component} from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html'
})
export class MePage {

  user: any;

  gotoUser() {
    // this.navCtrl.push(ManagerPage);
  }

  gotoOrder(){
    // this.navCtrl.push();
  }

  constructor(public navCtrl: NavController) {
    this.user = {
      nickname: "猫爷爷",
      avatar: '../../assets/default-avatar.jpg'
    }
  }

}
