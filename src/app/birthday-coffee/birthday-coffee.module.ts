import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirthdayCoffeePageRoutingModule } from './birthday-coffee-routing.module';

import { BirthdayCoffeePage } from './birthday-coffee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirthdayCoffeePageRoutingModule
  ],
  declarations: [BirthdayCoffeePage]
})
export class BirthdayCoffeePageModule {}
