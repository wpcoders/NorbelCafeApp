import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { AuthenticationServiceService } from '../providers/authentication-service.service';
import { UtilityService } from '../providers/utility.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    public menu: MenuController,
    public navCtl: NavController,
    public service: AuthenticationServiceService,
    public utility: UtilityService,
    public router: Router,
    public storage: Storage,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,]),
      password: new FormControl('', [Validators.required,]),
    });
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  doLogin(data) {
    if (this.loginForm.valid) {
      let formdata = new FormData();
      formdata.append('cafe_email', data.email);
      formdata.append('cafe_password', data.password);
      this.service.doLogin(formdata).subscribe(res => {
        if (res.status == true) {
          console.log(res);
          localStorage.setItem('auth_token', res.data.JWT_Token);
          localStorage.setItem('cafeId', res.data.cafe_id);
          localStorage.setItem('cafeCode', res.data.cafe_code);
          this.storage.set('auth_token', res.data.JWT_Token);
          console.log();
          this.router.navigateByUrl('/tabs/tab1');
          this.utility.presentToast(res.message);
        } else {
          this.utility.presentToast(res.message);
        }
      });
    } else {
      console.log('form errr');
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    }
  }
}
