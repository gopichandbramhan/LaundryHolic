import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BussinessPartnerRoutingModule } from './bussiness-partner-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { ServicesComponent } from './services/services.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReportsComponent } from './reports/reports.component';
import { ModuleHeaderComponent } from '../components/module-header/module-header.component';
import { ModuleFooterComponent } from '../components/module-footer/module-footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule} from '@angular/material/expansion';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AddMoneyToWalletComponent } from './add-money-to-wallet/add-money-to-wallet.component';
import { RequestStatementComponent } from './request-statement/request-statement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ViewMonthlyAnalysisComponent } from './view-monthly-analysis/view-monthly-analysis.component';
import { WithdrawalRequestComponent } from './withdrawal-request/withdrawal-request.component';
import { DrycleanComponent } from './dryclean/dryclean.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    ProfileComponent,
    MyOrderComponent,
    ServicesComponent,
    WalletComponent,
    ReportsComponent,
    ModuleHeaderComponent,
    ModuleFooterComponent,
    TermsAndConditionsComponent,
    AddMoneyToWalletComponent,
    RequestStatementComponent,
    ViewMonthlyAnalysisComponent,
    WithdrawalRequestComponent,
    DrycleanComponent
  ],
  imports: [
    CommonModule,
    BussinessPartnerRoutingModule,
    MatTableModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    
  ]
})
export class BussinessPartnerModule { }
