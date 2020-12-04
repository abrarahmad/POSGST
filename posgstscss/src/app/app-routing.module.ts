import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseOrderComponent } from './feature/purchase-order/purchase-order.component';

const routes: Routes = [
  { path: '', component: PurchaseOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
