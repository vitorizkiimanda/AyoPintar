import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  JumlahSoal = 1;
  private KodeSoal = 1;
  
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }

  tambah(){
    if(this.JumlahSoal<5)
    {
      this.JumlahSoal++
    }
  }
  kurang(){
    if(this.JumlahSoal>1)
    {
      this.JumlahSoal--
    }
  }

}
