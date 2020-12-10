import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAdvertPageRoutingModule } from './update-advert-routing.module';

import { UpdateAdvertPage } from './update-advert.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateAdvertPageRoutingModule
  ],
  declarations: [UpdateAdvertPage]
})
export class UpdateAdvertPageModule {}
