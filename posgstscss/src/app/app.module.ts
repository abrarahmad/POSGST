import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavMenuComponent } from './core/nav-menu/nav-menu.component';
import { PageHeaderComponent } from './core/page-header/page-header.component';
import { AppFooterComponent } from './core/app-footer/app-footer.component';
import { PurchaseOrderComponent } from './feature/purchase-order/purchase-order.component';

import { SupplyDetailComponent } from './feature/purchase-order/supply-detail/supply-detail.component';
import { ItemDetailComponent } from './feature/purchase-order/item-detail/item-detail.component';
import { ItemListComponent } from './feature/purchase-order/item-list/item-list.component';
import { OrderSummaryComponent } from './feature/purchase-order/order-summary/order-summary.component';

import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PageHeaderComponent,
    AppFooterComponent,
    PurchaseOrderComponent,
    SupplyDetailComponent,
    ItemDetailComponent,
    ItemListComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule,
    CheckboxModule,
    DialogModule,
    ButtonModule,
    TableModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
