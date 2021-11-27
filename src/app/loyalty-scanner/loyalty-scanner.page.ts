import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { AuthenticationServiceService } from '../providers/authentication-service.service';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-loyalty-scanner',
  templateUrl: './loyalty-scanner.page.html',
  styleUrls: ['./loyalty-scanner.page.scss'],
})
export class LoyaltyScannerPage implements OnInit {
  scannedData: any;
  cafeId: any;
  auth_token: any;
  bookingcount: any;
  freeCoffee: any;
  constructor(public navctl: NavController,
    private barcodeScanner: BarcodeScanner,
    public utility: UtilityService,
    public service: ServicesService,
    private storage: Storage,
  ) { }

  ngOnInit() {
  
    this.cafeId = localStorage.getItem('cafeId');
    this.doGetnextHourBooking();
  }
  doSuccessStampAdded() {
    this.navctl.navigateForward('/success-stamp-added');
  }
  scanCode(is_free_coffee_order) {
    console.log(is_free_coffee_order);
    
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
      //  alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData.text;
        if(is_free_coffee_order == null){
          console.log("paid coffee");
          
        this.doScanQRCode();
      }
        else{
          console.log("free coffee");
          this.doFreeScanQRCode(is_free_coffee_order)
        }
        
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
  doScanQRCode() {
    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_code', this.scannedData);
      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
      this.service.doScanQRCode(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res.message);
          this.freeCoffee = res.data.free_coffee;
          if (this.freeCoffee == false) {
            this.navctl.navigateForward('/success-stamp-added');
          } else {
            this.navctl.navigateForward('/free-stamp-added',{
              queryParams: {
                scannedData: this.scannedData,
              },
            });
          }
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
    
  }
  doEnterCodeManually(){
  this.navctl.navigateForward('/tabs/enter-code-manually');
    
  }
  doFreeScanQRCode(is_free_coffee_order) {
    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_code', this.scannedData);
      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
      formdata.append('is_free_coffee_order', is_free_coffee_order);
      this.service.doScanQRCode(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res.message);
          this.freeCoffee = res.data.free_coffee;
          if (this.freeCoffee == false) {
            this.navctl.navigateForward('/success-stamp-added');
          } else {
            this.navctl.navigateForward('/free-stamp-added',{
              queryParams: {
                scannedData: this.scannedData,
              },
             
            });
            is_free_coffee_order = '';
          }
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
    
  }
  doGetnextHourBooking(){
    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();
    
      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
     
      this.service.doGetnextHourBooking(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res.message);
          this.bookingcount = res.data;
         
          
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  
  }
  goToViewOrder(){
    this.navctl.navigateForward('/tabs/tab2');
  }
}
