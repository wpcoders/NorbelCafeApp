import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessStampAddedPageRoutingModule } from './success-stamp-added-routing.module';

import { SuccessStampAddedPage } from './success-stamp-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessStampAddedPageRoutingModule
  ],
  declarations: [SuccessStampAddedPage]
})
export class SuccessStampAddedPageModule {}
