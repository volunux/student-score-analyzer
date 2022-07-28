import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestHeaderInterceptor } from './base/interceptor/request-header.interceptor';
import { FooterComponent } from './shared/shared-component/footer/footer.component';
import { HeaderComponent } from './shared/shared-component/header/header.component';
import { SharedComponentModule } from './shared/shared-component/shared-component.module';


@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedComponentModule
  ],
  providers: [
     {'provide' : HTTP_INTERCEPTORS, useClass: RequestHeaderInterceptor, multi: true}
  ],
  bootstrap: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class AppModule { }
