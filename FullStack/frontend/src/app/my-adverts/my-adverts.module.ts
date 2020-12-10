import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdvertsPageRoutingModule } from './my-adverts-routing.module';

import { MyAdvertsPage } from './my-adverts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdvertsPageRoutingModule
  ],
  declarations: [MyAdvertsPage]
})
export class MyAdvertsPageModule {}
