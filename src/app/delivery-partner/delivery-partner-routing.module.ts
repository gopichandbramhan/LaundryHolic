import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DeliverMyorderComponent } from './deliver-myorder/deliver-myorder.component';
import { DeliverNeworderComponent } from './deliver-neworder/deliver-neworder.component';
import { DeliverAccountsComponent } from './deliver-accounts/deliver-accounts.component';
import { DeliverDashboardComponent } from './deliver-dashboard/deliver-dashboard.component';
import { DeliverUseLaundryholicappComponent } from './deliver-use-laundryholicapp/deliver-use-laundryholicapp.component';
import { DeliverContactusComponent } from './deliver-contactus/deliver-contactus.component';
import { DeliverShareLaundrholicAppComponent } from './deliver-share-laundrholic-app/deliver-share-laundrholic-app.component';
import { DeliverEditProfileComponent } from './deliver-edit-profile/deliver-edit-profile.component';

const routes: Routes = [
  {path:'',component:MainComponent,
      children:[
        { path: '', redirectTo: '/delivery/deliver_dashboard', pathMatch: 'full' },
        {path: 'deliver_dashboard', component:DeliverDashboardComponent},
        {path: 'deliver_neworder', component:DeliverNeworderComponent},
        {path: 'deliver_myorder', component:DeliverMyorderComponent},
        {path: 'deliver_accounts', component:DeliverAccountsComponent},
        {path: 'deliver_accounts/use_laundryholic_app', component:DeliverUseLaundryholicappComponent},
        {path: 'deliver_accounts/contact_us', component:DeliverContactusComponent},
        {path: 'deliver_accounts/share_laundryholic_app', component:DeliverShareLaundrholicAppComponent},
        {path: 'deliver_accounts/edit_profile', component:DeliverEditProfileComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryPartnerRoutingModule { 
  constructor(){
    console.log("delivery module")
  }
}
