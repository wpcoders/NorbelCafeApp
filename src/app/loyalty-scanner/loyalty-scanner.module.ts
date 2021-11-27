import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoyaltyScannerPageRoutingModule } from './loyalty-scanner-routing.module';

import { LoyaltyScannerPage } from './loyalty-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoyaltyScannerPageRoutingModule
  ],
  declarations: [LoyaltyScannerPage]
})
export class LoyaltyScannerPageModule {}
