import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController, Platform } from '@ionic/angular';
import { AuthenticationServiceService } from './providers/authentication-service.service';
import { Storage } from '@ionic/storage-angular';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  state: any;
  constructor(
    public navCtl: NavController,
    public storage: Storage,
    private router: Router,
    private auth: AuthenticationServiceService,
    public alertController: AlertController,
    private platform: Platform,
    private _location: Location,
  ) {
    this.initializeApp();
  }
  // logout(){
  //   this.navCtl.navigateForward('/login');
  // }
  async initializeApp() {
    await this.storage.create();
    this.doBackEvent();

    this.auth.authenticationState.subscribe(state => {
      console.log(state);
      this.state = state;
      if (state) {
        this.router.navigate(["/tabs/tab1"]);

      }else{
        this.router.navigate(["/login"]);
      }

    })

  }
  logout() {
    this.auth.logout();
  }
  doLoyaltyScanner(){
 //  this.navCtl.navigateForward('/tabs/loyalty-scanner');
    this.navCtl.navigateForward('/tabs/tab1');
  }
  doReservations(){
  ///  this.navCtl.navigateForward('/tabs/reservations');
    this.navCtl.navigateForward('/tabs/tab2');
  }
  doBackEvent(){
    let a = 0;
    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      a++;
      console.log('Back press handler!');
      if (a == 2) { 
      if (this._location.isCurrentPathEqualTo('/tabs/tab1')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
     
      } else if (this._location.isCurrentPathEqualTo('/login')){
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      }
      else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }
    }
    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertController.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });
  }
   showExitConfirm() {
    this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }
}
