import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Dialogs } from '@ionic-native/dialogs';
// import { BackgroundMode } from '@ionic-native/background-mode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toggleStatus:any;
  JumlahSoal = 1;
  private KodeSoal = 1;
  
  constructor(
    private localNotifications: LocalNotifications,

    public navCtrl: NavController,
    // private backgroundMode: BackgroundMode,
    private dialogs: Dialogs,
    public alertCtrl: AlertController
    ) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad About2');
        
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

  gotoHelp(){
    this.navCtrl.push(HelpPage);
  }

  Change_Toggle() {
  if(this.toggleStatus == true){
    this.dialogs.prompt('Soal persamaan matematika dasar', 'Soal 1', ['Jawab','Jawab'], 'Tulis Jawaban')

    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
    });

    this.dialogs.beep(3);
          
   }
   else{
     this.dialogs.prompt('Soal persamaan matematika dasar2', 'Soal 1', ['Jawab','Jawab'], 'Tulis Jawaban')

    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
    });

    this.dialogs.beep(3);
          
   }
  }

  notif() {

    this.dialogs.prompt('Soal persamaan matematika dasar', 'Soal 1', ['Jawab','Jawab'], 'Tulis Jawaban')

    .then(function(result) {
      var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      var btnIndex = result.buttonIndex;
    });

    this.dialogs.beep(3);
  }


  // this.backgroundMode.enable();


}
