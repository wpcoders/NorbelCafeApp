import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public menu: MenuController,
  ) {}
  ionViewDidEnter() {
    this.menu.enable(true);
    
  }
}
