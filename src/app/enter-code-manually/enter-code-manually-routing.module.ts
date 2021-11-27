import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterCodeManuallyPage } from './enter-code-manually.page';

const routes: Routes = [
  {
    path: '',
    component: EnterCodeManuallyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterCodeManuallyPageRoutingModule {}
