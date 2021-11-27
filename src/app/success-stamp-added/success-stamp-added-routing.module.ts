import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessStampAddedPage } from './success-stamp-added.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessStampAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessStampAddedPageRoutingModule {}
