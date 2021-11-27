import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FreeStampAddedPage } from './free-stamp-added.page';

const routes: Routes = [
  {
    path: '',
    component: FreeStampAddedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreeStampAddedPageRoutingModule {}
