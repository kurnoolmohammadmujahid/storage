import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private pro: Pro, public navCtrl: NavController, private iab: InAppBrowser) {

    // this.pro.getAppInfo().then((res: AppInfo) => {
    //   console.log(res)
    // })
    
    // // Get live update info
    // this.pro.deploy.info().then((res: DeployInfo) => {
    //   console.log(res)
    // })

  }

  web(){
    this.iab.create('https://ionicframework.com/');
  }

}
