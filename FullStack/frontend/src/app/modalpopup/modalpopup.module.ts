import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpopupPageRoutingModule } from './modalpopup-routing.module';

import { ModalpopupPage } from './modalpopup.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalpopupPageRoutingModule
  ],
  declarations: [ModalpopupPage]
})
export class ModalpopupPageModule {}
