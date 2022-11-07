import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componnets/header/header.component';
import { SidebarComponent } from './Componnets/sidebar/sidebar.component';
import { HomeComponent } from './Componnets/home/home.component';
import { FooterComponent } from './Componnets/footer/footer.component';
import { StoreDataComponent } from './ViewModels/store-data/store-data.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { ProductListComponent } from './Componnets/product-list/product-list.component'; 
import { FormsModule } from '@angular/forms';
import { LighBoxDirectiv } from './Directives/ligh-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './Componnets/order-master/order-master.component';
import { LoginComponent } from './Componnets/login/login.component';
import { MainLayoutComponent } from './Componnets/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Componnets/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductPopUpComponent } from './Componnets/product-list/product-pop-up/product-pop-up.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule  } from 'ngx-pagination';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    FooterComponent,
    StoreDataComponent,
    ProductListComponent,
    LighBoxDirectiv,
    USDtoEGPPipe,
    OrderMasterComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    ProductPopUpComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,


  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
