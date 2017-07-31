import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KumpulanBukuPage } from './kumpulan-buku';

@NgModule({
  declarations: [
    KumpulanBukuPage,
  ],
  imports: [
    IonicPageModule.forChild(KumpulanBukuPage),
  ],
})
export class KumpulanBukuPageModule {}
