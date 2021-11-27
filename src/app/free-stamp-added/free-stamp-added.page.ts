import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { UtilityService } from '../providers/utility.service';
import { ServicesService } from '../providers/services.service';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-free-stamp-added',
  templateUrl: './free-stamp-added.page.html',
  styleUrls: ['./free-stamp-added.page.scss'],
})
export class FreeStampAddedPage implements OnInit {
  cafeId: any;
  auth_token: any;
  scannedData: any;
  constructor(public navctl:NavController,  
    private barcodeScanner: BarcodeScanner,
    public utility: UtilityService,
    public service: ServicesService,
    private route: ActivatedRoute,
    private storage: Storage,) { }

  ngOnInit() {
    this.cafeId = localStorage.getItem('cafeId');
    this.route.queryParams.subscribe((params) => {
      console.log('params: ', params);
      this.scannedData =  params.scannedData;
    });
    
  }
  doBack(){
    this.navctl.back();
  }
  doScanQRCodeFreeCoffee(is_taking_status){
    console.log(is_taking_status);
    
    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_code', this.scannedData);
      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
      formdata.append('is_taking', is_taking_status);
      this.service.doScanQRCodeFreeCoffee(formdata).subscribe(res => {
        if (res.status == true) {
          this.utility.presentToast(res.message);
          console.log(res.message);
          this.navctl.back();
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
 
  }
}
