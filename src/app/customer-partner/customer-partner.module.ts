import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPartnerRoutingModule } from './customer-partner-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { Dryclean1Component } from './components/dryclean1/dryclean1.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { BuynowComponent } from './components/buynow/buynow.component';
import { CustFooterComponent } from './components/cust-footer/cust-footer.component';
import { CustMyrewardsComponent } from './components/cust-myrewards/cust-myrewards.component';
import { CustMyorderComponent } from './components/cust-myorder/cust-myorder.component';
import { CustNearbystoreComponent } from './components/cust-nearbystore/cust-nearbystore.component';
import { CustMyaccountComponent } from './components/cust-myaccount/cust-myaccount.component';
import { CustaddmoneytowalletComponent } from './components/custaddmoneytowallet/custaddmoneytowallet.component';
import { CustDeliveryAddressComponent } from './components/cust-delivery-address/cust-delivery-address.component';
import { CustContactusComponent } from './components/cust-contactus/cust-contactus.component';
import { CustUseLaundryholicAppComponent } from './components/cust-use-laundryholic-app/cust-use-laundryholic-app.component';
import { CustEditprofileComponent } from './components/cust-editprofile/cust-editprofile.component';
import { CustSubscriptionPlanComponent } from './components/cust-subscription-plan/cust-subscription-plan.component';
import { CustSupportComponent } from './components/cust-support/cust-support.component';
import { CustChatboxComponent } from './components/cust-chatbox/cust-chatbox.component';
import { CustTrackorderComponent } from './components/cust-trackorder/cust-trackorder.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { SteamIronComponent } from './components/steam-iron/steam-iron.component';
import { CarpetCleaningComponent } from './components/carpet-cleaning/carpet-cleaning.component';
import { HomeCleaningComponent } from './components/home-cleaning/home-cleaning.component';
import { PetLaundryComponent } from './components/pet-laundry/pet-laundry.component';
import { ShoeLaundryComponent } from './components/shoe-laundry/shoe-laundry.component';
import { WashIronComponent } from './components/wash-iron/wash-iron.component';
import { RepairingComponent } from './components/repairing/repairing.component';
import { DyeingComponent } from './components/dyeing/dyeing.component';
import { AlterationComponent } from './components/alteration/alteration.component';
import { CleaningComponent } from './components/cleaning/cleaning.component';
import { LeatherCleaningComponent } from './components/leather-cleaning/leather-cleaning.component';
import { MatStepperModule } from '@angular/material/stepper';
import { CustSchedulePickupComponent } from './components/cust-schedule-pickup/cust-schedule-pickup.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    Dryclean1Component,
    AddtocartComponent,
    BuynowComponent,
    CustFooterComponent,
    CustMyrewardsComponent,
    CustMyorderComponent,
    CustNearbystoreComponent,
    CustMyaccountComponent,
    CustaddmoneytowalletComponent,
    CustDeliveryAddressComponent,
    CustContactusComponent,
    CustUseLaundryholicAppComponent,
    CustEditprofileComponent,
    CustSubscriptionPlanComponent,
    CustSupportComponent,
    CustChatboxComponent,
    CustTrackorderComponent,
    SteamIronComponent,
    CarpetCleaningComponent,
    HomeCleaningComponent,
    PetLaundryComponent,
    ShoeLaundryComponent,
    WashIronComponent,
    RepairingComponent,
    DyeingComponent,
    AlterationComponent,
    CleaningComponent,
    LeatherCleaningComponent,
    CustSchedulePickupComponent,
  ],
  imports: [
    CommonModule,
    CustomerPartnerRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    MatStepperModule,
    RouterModule,
    
  ],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class CustomerPartnerModule { }
