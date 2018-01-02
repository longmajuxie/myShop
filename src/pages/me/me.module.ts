import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MePage } from './me';

@NgModule({
  declarations: [
    MePage,
  ],
  imports: [
    IonicPageModule.forChild(MePage),
    TranslateModule.forChild()
  ],
  exports: [
    MePage
  ]
})
export class MePageModule { }
