import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
       // loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
       loadChildren: () => import('../loyalty-scanner/loyalty-scanner.module').then(m => m.LoyaltyScannerPageModule)
      },
      {
        path: 'tab2',
       // loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
       // loadChildren: () => import('../birthday-coffee/birthday-coffee.module').then(m => m.BirthdayCoffeePageModule)
       loadChildren: () => import('../reservations/reservations.module').then(m => m.ReservationsPageModule)
      },
      {
        path: 'enter-code-manually',
        loadChildren: () => import('../enter-code-manually/enter-code-manually.module').then( m => m.EnterCodeManuallyPageModule)
      },
      // {
      //   path: 'loyalty-scanner',
      //   loadChildren: () => import('../loyalty-scanner/loyalty-scanner.module').then(m => m.LoyaltyScannerPageModule)
      //   },
        // {
        //   path: 'reservations',
        //   loadChildren: () => import('../reservations/reservations.module').then(m => m.ReservationsPageModule)
        //   },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
