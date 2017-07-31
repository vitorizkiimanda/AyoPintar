import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  kelas:string;
  i:number;

  testRadioOpen: boolean;
  testRadioResult;
  isValidKelas=false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotoHome(){
    if(this.isValidKelas){
      this.navCtrl.push(HomePage);
    }
    else{
      let alert = this.alertCtrl.create({
      title: 'Isi Kelas Kamu',
      subTitle: 'Tekan tombol Pilih Kelas.',
      buttons: ['OK']
      });
      alert.present();
    }
    
  }

  checkKelas(){
     this.isValidKelas=true;
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Kamu Kelas Berapa?');

    // for(let data of this.dokter){
    //   alert.addInput({
    //   type: 'radio',
    //   label: data.specialization,
    //   value: data.specialization
    // });
    // }
      alert.addInput({
      type: 'radio',
      label: "Kelas 4 SD",
      value: '4'
      });
      alert.addInput({
      type: 'radio',
      label: "Kelas 5 SD",
      value: '5'
    });
    
      alert.addInput({
      type: 'radio',
      label: "Kelas 6 SD",
      value: '6'
      });


    alert.addButton('Batal');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.kelas=data;
        this.checkKelas();
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


}
