import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyScannerPage } from './loyalty-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: LoyaltyScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoyaltyScannerPageRoutingModule {}
