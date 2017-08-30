import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Dialogs } from '@ionic-native/dialogs';
import { BackgroundMode } from '@ionic-native/background-mode';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  random1: number;
  random2: number;
  random3: number;
  hasil: number;
  jawaban: number;
  soal: string
  
  
  toggleStatus = true;
  JumlahSoal = 1;
  private KodeSoal = 1;
  
  constructor(
    private localNotifications: LocalNotifications,

    public navCtrl: NavController,
    private backgroundMode: BackgroundMode,
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

    // nnti dikasih password gitu
  
  if(this.toggleStatus == true){

    this.backgroundMode.enable();
          
   }
   else{
     this.backgroundMode.disable();  
   }

  }

  // var timeNow = new Date().getTime();
  Change_Soal() {
    this.random();
  }

  random(){
    if(this.KodeSoal==1){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+'= ?';
      }
      else if(this.KodeSoal==2){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+'= ?';
      }
      else if(this.KodeSoal==3){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*99)+10);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+'= ?';
      }
      else if(this.KodeSoal==4){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2;
        this.soal=this.random1+' x '+this.random2+'= ?';
      }
      else if(this.KodeSoal==5){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2;
        this.soal=this.random1+' x '+this.random2+'= ?';
      }
      else if(this.KodeSoal==6){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.random3 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2 + this.random3;
        this.soal=this.random1+' x '+this.random2+' + '+this.random3+'= ?';
      }
      else if(this.KodeSoal==7){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*99)+10);
        this.random3 = Math.floor((Math.random()*99)+10);
        this.hasil=this.random1 * this.random2 + this.random3;
        this.soal=this.random1+' x '+this.random2+' + '+this.random3+'= ?';
      }

  }

  cekJawab() {
    if(this.jawaban==this.hasil){
          let alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      this.notif();
    }
  }

  notif() {


    this.random();



    
    this.dialogs.prompt(this.soal, 'Soal 1', ['Jawab'],'')

    .then(function(result) {
      // var input = result.input1;
      // no button = 0, 'OK' = 1, 'Cancel' = 2
      this.jawaban = result;
      this.cekJawab();
      // var btnIndex = result.buttonIndex;
      
    });

   

  }

  rollDice() {
        var t_this = this;
        var i = 0
        var roll_int = setInterval(() => {

          this.dialogs.prompt('Soal persamaan matematika dasar', 'Soal 1', ['Jawab','Jawab'], 'Tulis Jawaban')

          .then(function(result) {
            var input = result.input1;
            // no button = 0, 'OK' = 1, 'Cancel' = 2
            var btnIndex = result.buttonIndex;
          });

        }, 10000);

        
      }


}
