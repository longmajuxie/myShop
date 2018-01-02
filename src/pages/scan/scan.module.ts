import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRScanner } from '@ionic-native/qr-scanner';
import { ScanPage } from './scan';


@NgModule({
  declarations: [
    ScanPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanPage),
  ],
  providers: [
    QRScanner
  ],
  exports:[ScanPage]
})
export class ScanPageModule {}
