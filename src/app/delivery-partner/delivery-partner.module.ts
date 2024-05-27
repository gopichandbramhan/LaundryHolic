import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryPartnerRoutingModule } from './delivery-partner-routing.module';
import { MainComponent } from './main/main.component';
import { DeliverMyorderComponent } from './deliver-myorder/deliver-myorder.component';
import { DeliverNeworderComponent } from './deliver-neworder/deliver-neworder.component';
import { DeliverAccountsComponent } from './deliver-accounts/deliver-accounts.component';
import { DeliverDashboardComponent } from './deliver-dashboard/deliver-dashboard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeliverUseLaundryholicappComponent } from './deliver-use-laundryholicapp/deliver-use-laundryholicapp.component';
import { DeliverShareLaundrholicAppComponent } from './deliver-share-laundrholic-app/deliver-share-laundrholic-app.component';
import { DeliverContactusComponent } from './deliver-contactus/deliver-contactus.component';
import { DeliverEditProfileComponent } from './deliver-edit-profile/deliver-edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliverHeaderComponent } from './deliver-header/deliver-header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    MainComponent,
    DeliverHeaderComponent,
    DeliverMyorderComponent,
    DeliverNeworderComponent,
    DeliverAccountsComponent,
    DeliverDashboardComponent,
    DeliverUseLaundryholicappComponent,
    DeliverShareLaundrholicAppComponent,
    DeliverContactusComponent,
    DeliverEditProfileComponent,
  
  ],
  imports: [
    CommonModule,
    DeliveryPartnerRoutingModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ]
})
export class DeliveryPartnerModule { }
