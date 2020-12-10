import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateAdvertPage } from './create-advert.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAdvertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAdvertPageRoutingModule {}
