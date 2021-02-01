import { SharedModule } from '../../shared.module';
import { OrderItensComponent } from './order-itens/order-itens.component';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [DeliveryCostsComponent, OrderComponent, OrderItensComponent],
  imports: [SharedModule, OrderRoutingModule],
})
export class OrderModule {}
