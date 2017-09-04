import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Dialogs } from '@ionic-native/dialogs';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
import { Vibration } from '@ionic-native/vibration';

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
  soal: string;
  soal1 : string;
  
  
  toggleStatus = false;
  JumlahSoal = 1;
  private KodeSoal = 1;
  
  constructor(
    private localNotifications: LocalNotifications,

    private androidFullScreen: AndroidFullScreen,
    public navCtrl: NavController,
    private backgroundMode: BackgroundMode,
    private dialogs: Dialogs,
    public alertCtrl: AlertController,
    private vibration: Vibration
    ) {}
      

    ionViewDidLoad() {

       

        console.log('ionViewDidLoad About2');
        this.backgroundMode.enable(); 
        this.loop();  
        
     }

     

     loop(){

       setInterval(() => {      
          console.log('timer');
          //you can call function here
          this.localNotifications.schedule({
            id:1,
            text : 'Tekan Tombol BERLATIH untuk menghentikan getaran',
            // icon: 'file:/assets/pict/AkuSehat.png'
          }),
          this.vibration.vibrate([
            2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000,100,2000])
       },45000);
        // this.ionViewDidLoad;
         
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

  Change_Soal() {
    this.random();
  }

  randomKodeSoal(){
    this.KodeSoal = Math.floor((Math.random()*7)+1);
  }

  random(){
    if(this.KodeSoal==1){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+' = ?';
        this.soal1=this.random1+' + '+this.random2+' = ';
      }
      else if(this.KodeSoal==2){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+' = ?';
        this.soal1=this.random1+' + '+this.random2+' = ';
      }
      else if(this.KodeSoal==3){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*99)+10);
        this.hasil=this.random1 + this.random2;
        this.soal=this.random1+' + '+this.random2+' = ?';
        this.soal1=this.random1+' + '+this.random2+' = ';
      }
      else if(this.KodeSoal==4){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2;
        this.soal=this.random1+' x '+this.random2+' = ?';
        this.soal1=this.random1+' x '+this.random2+' = ';
      }
      else if(this.KodeSoal==5){
        this.random1 = Math.floor((Math.random()*99)+10);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2;
        this.soal=this.random1+' x '+this.random2+' = ?';
        this.soal1=this.random1+' x '+this.random2+' = ';
      }
      else if(this.KodeSoal==6){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*9)+1);
        this.random3 = Math.floor((Math.random()*9)+1);
        this.hasil=this.random1 * this.random2 + this.random3;
        this.soal=this.random1+' x '+this.random2+' + '+this.random3+' = ?';
        this.soal1=this.random1+' x '+this.random2+' + '+this.random3+' = ';
      }
      else if(this.KodeSoal==7){
        this.random1 = Math.floor((Math.random()*9)+1);
        this.random2 = Math.floor((Math.random()*99)+10);
        this.random3 = Math.floor((Math.random()*99)+10);
        this.hasil=this.random1 * this.random2 + this.random3;
        this.soal=this.random1+' x '+this.random2+' + '+this.random3+' = ?';
        this.soal1=this.random1+' x '+this.random2+' + '+this.random3+' = ';
      }
      console.log(this.random1,this.random2,this.random3);
      
  }

  cekJawab() {
    console.log(this.jawaban);
    if(this.jawaban==this.hasil){
      
      console.log("masuk cek jawab bener");
          let alert = this.alertCtrl.create({
        title: 'Jawaban Benar!',
        buttons: [
        {
          text: 'Akhiri',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Lanjut Berlatih!',
          handler: data => {
            console.log('Saved clicked');
            // this.jawaban=data.jawaban;
            this.latihan();
          }
        }
      ]
      });
      alert.present();
    }
    else {
      console.log("masuk cek jawab salah");
      let alert = this.alertCtrl.create({
        title: 'Jawaban Salah!',
        subTitle : '<br>'+'Jawaban yang benar :',
        message: this.soal1 + this.hasil,
        buttons: [
        {
          text: 'Akhiri',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Lanjut Berlatih!',
          handler: data => {
            console.log('Saved clicked');
            // this.jawaban=data.jawaban;
            this.latihan();
          }
        }
      ]
      });
      alert.present();
    }
  }


  latihan() {
        // menghentikan getaran
        this.vibration.vibrate(0);
        // this.randomKodeSoal();
        this.random();
        this.showPrompt();



      }

      showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Berlatih',
      message: this.soal,
      inputs: [
        {
          name: 'jawaban',
          placeholder: 'Jawaban'
        },
      ],
      buttons: [
        {
          text: 'Jawab',
          handler: data => {
            console.log('Saved clicked');
            this.jawaban=data.jawaban;
            this.cekJawab();
          }
        }
      ]
    });
    prompt.present();
  }



}
