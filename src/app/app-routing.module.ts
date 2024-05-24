import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteaccountComponent } from './components/deleteaccount/deleteaccount.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'',component:MainComponent,
      children:[
          { path: 'home', component:HomeComponent },
          { path: 'about', component: AboutComponent },
          { path: 'service', component: ServiceComponent },
          { path: 'blog', component: BlogComponent },
          { path: 'login', component: LoginComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'deleteaccount', component: DeleteaccountComponent },
          { path: 'signup', component: SignupComponent },
          { path: 'privacypolicy', component: PrivacypolicyComponent },
          { path: 'cart', component: CartComponent },
      ]
  },
  { path:'bussiness', loadChildren: () => import('./bussiness-partner/bussiness-partner.module').then(x => x.BussinessPartnerModule)},
  { path:'delivery', loadChildren: () => import('./delivery-partner/delivery-partner.module').then(x => x.DeliveryPartnerModule)},
  { path:'customer', loadChildren: () => import('./customer-partner/customer-partner.module').then(x => x.CustomerPartnerModule)},
  { path: '**', component: PagenotfoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
