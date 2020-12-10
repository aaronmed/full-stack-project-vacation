import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAdvertPageRoutingModule } from './create-advert-routing.module';

import { CreateAdvertPage } from './create-advert.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateAdvertPageRoutingModule
  ],
  declarations: [CreateAdvertPage]
})
export class CreateAdvertPageModule {}
