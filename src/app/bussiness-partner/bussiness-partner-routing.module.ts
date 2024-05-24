import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ServicesComponent } from './services/services.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReportsComponent } from './reports/reports.component';
import { DrycleanComponent } from './dryclean/dryclean.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AddMoneyToWalletComponent } from './add-money-to-wallet/add-money-to-wallet.component';
import { RequestStatementComponent } from './request-statement/request-statement.component';
import { ViewMonthlyAnalysisComponent } from './view-monthly-analysis/view-monthly-analysis.component';
import { WithdrawalRequestComponent } from './withdrawal-request/withdrawal-request.component';

const routes: Routes = [
  {path:'',component:MainComponent,
      children:[
        {path: '', redirectTo: '/bussiness/dashboard', pathMatch: 'full' },
        {path:'dashboard', component:DashboardComponent},
        {path:'profile',component:ProfileComponent},
        {path:'myOrder',component:MyOrderComponent},
        {path:'services', component:ServicesComponent},
        {path:'wallet',component:WalletComponent},
        {path:'commission',component:ReportsComponent},
        {path:'dryclean',component:DrycleanComponent},
        {path:'terms&conditions', component: TermsAndConditionsComponent},
        {path:'wallet/add_money_to_wallet', component: AddMoneyToWalletComponent},
        {path:'wallet/request_statement', component: RequestStatementComponent},
        {path:'wallet/view_monthly_analysis', component: ViewMonthlyAnalysisComponent},
        {path:'wallet/withdrawal_request', component: WithdrawalRequestComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BussinessPartnerRoutingModule {
  constructor(){
    console.log("bussiness module")
  }
 }
