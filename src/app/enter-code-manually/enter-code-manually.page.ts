import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../providers/services.service';
import { UtilityService } from '../providers/utility.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-enter-code-manually',
  templateUrl: './enter-code-manually.page.html',
  styleUrls: ['./enter-code-manually.page.scss'],
})
export class EnterCodeManuallyPage implements OnInit {
  auth_token: any;
  mainCode: any;
  codeOne: any;
  codeTwo: any;
  codeThree: any;
  codeFour: any;
  cafeId: any;
  freeCoffee: any;
  constructor(
    public navctl: NavController,  
    public utility: UtilityService,
    public service: ServicesService,
    private storage: Storage,
  ) { }

  ngOnInit() {
    this.cafeId = localStorage.getItem('cafeId');
  }
  otpController(event, next, prev) {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }
  }
  doAddCode(){
    this.mainCode = this.codeOne + this.codeTwo + this.codeThree + this.codeFour;
    console.log(this.mainCode);
    
    this.storage.get("auth_token").then(val => {
      this.auth_token = val;
      let formdata = new FormData();
      formdata.append('user_code', this.mainCode);
      formdata.append('cafe_id', this.cafeId);
      formdata.append('token', this.auth_token);
      this.service.doScanQRCode(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res.message);
          this.freeCoffee = res.data.free_coffee;
          if (this.freeCoffee == false) {
            this.navctl.navigateForward('/success-stamp-added');
          } else {
            this.navctl.navigateForward('/free-stamp-added');
          }
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    });
  
  }
}
