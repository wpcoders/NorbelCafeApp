import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'success-stamp-added',
    loadChildren: () => import('./success-stamp-added/success-stamp-added.module').then( m => m.SuccessStampAddedPageModule)
  },
  {
    path: 'free-stamp-added',
    loadChildren: () => import('./free-stamp-added/free-stamp-added.module').then( m => m.FreeStampAddedPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
