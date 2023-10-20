import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RePassPage } from './re-pass.page';

const routes: Routes = [
  {
    path: '',
    component: RePassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RePassPageRoutingModule {}
