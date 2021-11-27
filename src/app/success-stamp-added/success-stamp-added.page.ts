import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-success-stamp-added',
  templateUrl: './success-stamp-added.page.html',
  styleUrls: ['./success-stamp-added.page.scss'],
})
export class SuccessStampAddedPage implements OnInit {

  constructor(public navctl:NavController) { }

  ngOnInit() {
  }
  doBack(){
    this.navctl.back();
  }
}
