import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController} from 'ionic-angular';
import { AppServiceProvider } from '../../providers/app-service/app-service';
import { PusherServiceProvider } from '../../providers/pusher-service/pusher-service';



@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public pusher: PusherServiceProvider,public app:AppServiceProvider ,public viewCtrl: ViewController,public modal: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  clear()
  {
    this.app.ncounter=0;
    this.pusher.message= [];
    console.log(this.pusher.message);
  }

}
