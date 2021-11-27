import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterCodeManuallyPageRoutingModule } from './enter-code-manually-routing.module';

import { EnterCodeManuallyPage } from './enter-code-manually.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnterCodeManuallyPageRoutingModule
  ],
  declarations: [EnterCodeManuallyPage]
})
export class EnterCodeManuallyPageModule {}
