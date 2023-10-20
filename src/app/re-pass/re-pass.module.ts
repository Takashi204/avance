import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RePassPageRoutingModule } from './re-pass-routing.module';

import { RePassPage } from './re-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RePassPageRoutingModule
  ],
  declarations: [RePassPage]
})
export class RePassPageModule {}
