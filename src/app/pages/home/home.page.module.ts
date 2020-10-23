import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AutoCompleteModule} from 'ionic4-auto-complete';

import {HomePage} from './home.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    AutoCompleteModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
