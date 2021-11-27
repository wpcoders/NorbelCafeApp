import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
  scannedData: any;
  cafeId: any;
  auth_token: any;
  freeCoffee: any;
  todayData: any = [];
  tomorrowData: any = [];

  constructor(public navctl: NavController,
    private barcodeScanner: BarcodeScanner,
    public utility: UtilityService,
    public service: ServicesService,
    private storage: Storage,) { }

  ngOnInit() {
    this.cafeId = localStorage.getItem('cafeId');
    this.doGetBookingDetails();
  }
  doGetBookingDetails() {

    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();

      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
      this.service.doGetBookingDetails(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.todayData = res.data.today;
          this.tomorrowData = res.data.tomorrow;
       
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  }
  doCancleBooking(id){
console.log(id);

    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();

      formdata.append('cafe_id', this.cafeId);
      formdata.append('user_id', id);
      formdata.append('token', this.auth_token);
      this.service.doCancleBooking(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          this.doGetBookingDetails(); 
         
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });    

  }
}
