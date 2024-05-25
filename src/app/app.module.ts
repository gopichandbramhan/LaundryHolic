import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteaccountComponent } from './components/deleteaccount/deleteaccount.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SwipersliderComponent } from './components/swiperslider/swiperslider.component';
import { FooterComponent } from './components/footer/footer.component';
// import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { AuthService } from './myservices/auth.service';
import { DeliveryPartnerModule } from './delivery-partner/delivery-partner.module';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    BlogComponent,
    ContactComponent,
    DeleteaccountComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    PrivacypolicyComponent,
    SwipersliderComponent,
    FooterComponent,
    CartComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    DeliveryPartnerModule,
    RouterModule,
    MatExpansionModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("app module")
  }

}
