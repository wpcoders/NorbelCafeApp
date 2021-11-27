import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FreeStampAddedPageRoutingModule } from './free-stamp-added-routing.module';

import { FreeStampAddedPage } from './free-stamp-added.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FreeStampAddedPageRoutingModule
  ],
  declarations: [FreeStampAddedPage]
})
export class FreeStampAddedPageModule {}
