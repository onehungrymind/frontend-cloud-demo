import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonDataModule } from '@workspace/common-data';
import { TotalsViewModule } from '@workspace/totals-view';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemsTotalComponent } from './items/items-total/items-total.component';
import { ItemsComponent } from './items/items.component';
import { WidgetDetailComponent } from './widgets/widget-detail/widget-detail.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsTotalComponent } from './widgets/widgets-total/widgets-total.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    ItemsTotalComponent,
    WidgetsComponent,
    WidgetDetailComponent,
    WidgetsListComponent,
    WidgetsTotalComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppMaterialModule,
    CommonDataModule,
    TotalsViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
