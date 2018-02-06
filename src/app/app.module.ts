import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ContactsComponent} from './contacts.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';



import{RegistrationComponent} from './registration/registration.component'
import { LoginComponent } from './login/login.component';
import{FooterComponent} from'./footer.component';

import { MapComponent } from './map/map.component';
import{ProductComponent} from './product/product.component';
import{ProductDisplayComponent} from './product display/productdisplay.component'
import{MapService} from'./map.service'
@NgModule({
  declarations: [
    AppComponent, LoginComponent,ContactsComponent,RegistrationComponent,FooterComponent, MapComponent,ProductComponent, ProductDisplayComponent
  ],
  
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([
     {
        path:'',
        component:LoginComponent
      },{
        path:'registration',
        component:RegistrationComponent
      },
      {

      path:'contacts',
      component:ContactsComponent
    },{
      path:'login',
      component:LoginComponent
    },{
      path:'product',
      component:ProductComponent
    },
    {
      path:'map',
      component:MapComponent
    },{
      path:'productdisplay',
      component:ProductDisplayComponent
    }
  
  ]),
    HttpModule
  ],
  providers: 
    [MapService],
  bootstrap: [AppComponent]
}) 

export class AppModule { }
