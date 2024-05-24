import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

import { Dryclean1Component } from './components/dryclean1/dryclean1.component';
import { BuynowComponent } from './components/buynow/buynow.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { CustMyrewardsComponent } from './components/cust-myrewards/cust-myrewards.component';
import { CustaddmoneytowalletComponent } from './components/custaddmoneytowallet/custaddmoneytowallet.component';
import { CustMyorderComponent } from './components/cust-myorder/cust-myorder.component';
import { CustTrackorderComponent } from './components/cust-trackorder/cust-trackorder.component';
import { CustMyaccountComponent } from './components/cust-myaccount/cust-myaccount.component';
import { CustDeliveryAddressComponent } from './components/cust-delivery-address/cust-delivery-address.component';
import { CustContactusComponent } from './components/cust-contactus/cust-contactus.component';
import { CustUseLaundryholicAppComponent } from './components/cust-use-laundryholic-app/cust-use-laundryholic-app.component';
import { CustEditprofileComponent } from './components/cust-editprofile/cust-editprofile.component';
import { CustSubscriptionPlanComponent } from './components/cust-subscription-plan/cust-subscription-plan.component';
import { CustSupportComponent } from './components/cust-support/cust-support.component';
import { CustChatboxComponent } from './components/cust-chatbox/cust-chatbox.component';
import { CustNearbystoreComponent } from './components/cust-nearbystore/cust-nearbystore.component';
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
import { CustSchedulePickupComponent } from './components/cust-schedule-pickup/cust-schedule-pickup.component';

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'customer-home', component: HomeComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'steam_iron', component: SteamIronComponent },
      { path: 'carpet_cleaning', component: CarpetCleaningComponent },
      { path: 'home_cleaning', component: HomeCleaningComponent },
      { path: 'pet_laundry', component: PetLaundryComponent },
      { path: 'shoe_laundry', component: ShoeLaundryComponent },
      { path: 'leather_cleaning', component: LeatherCleaningComponent },
      { path: 'wash_iron', component: WashIronComponent },
      { path: 'repairing', component: RepairingComponent },
      { path: 'dyeing', component: DyeingComponent },
      { path: 'alteration', component: AlterationComponent },
      { path: 'cleaning', component: CleaningComponent },
      { path: 'terms&conditions', component: TermsAndConditionsComponent },
      { path: 'myaccount/cust_privacy_policy', component: PrivacyPolicyComponent },
      { path: 'cust_dryclean', component: Dryclean1Component },
      { path: 'buynow', component: BuynowComponent },
      { path: 'addtocart', component: AddtocartComponent },
      { path: 'addtocart/cust_schedule_pickup', component: CustSchedulePickupComponent },
      { path: 'myrewards', component: CustMyrewardsComponent },
      { path: 'myrewards/cust_add_moneyto_wallet', component: CustaddmoneytowalletComponent },
      { path: 'myorder', component: CustMyorderComponent },
      { path: 'myorder/track_order', component: CustTrackorderComponent },
      { path: 'myaccount', component: CustMyaccountComponent },
      { path: 'myaccount/cust_delivery_address', component: CustDeliveryAddressComponent },
      { path: 'myaccount/cust_contactus', component: CustContactusComponent },
      { path: 'myaccount/cust_use_laundryholic_app', component: CustUseLaundryholicAppComponent },
      { path: 'myaccount/cust_edit_profile', component: CustEditprofileComponent },
      { path: 'myaccount/cust_subscription_plan', component: CustSubscriptionPlanComponent },
      { path: 'myaccount/cust_support', component: CustSupportComponent },
      { path: 'myaccount/cust_support/chatbox', component: CustChatboxComponent },
      { path: 'nearbystore', component: CustNearbystoreComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerPartnerRoutingModule {
  constructor() {
    console.log("customer module")
  }
 
}
