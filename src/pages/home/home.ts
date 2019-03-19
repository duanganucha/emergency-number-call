import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //   191 แจ้งเหตุด่วน - เหตุร้าย
  // 199 แจ้งไฟไหม้ - ดับเพลิง
  // 1669 เจ็บป่วยฉุกเฉิน
  // 1554 กู้ชีพ กทม.
  // 1192 แจ้งรถหาย, ถูกขโมย
  // 1195 กองปราบปราม
  // 1584 ร้องเรียนรถสาธารณะ
  // 1599 แจ้งคนหาย
  // 1197 สอบถามเส้นทาง
  // 1323 สายด่วนสุขภาพจิต
  // 1677 ร่วมด้วยช่วยกัน
  nums = ['191', '199', '1669', '1554', '1192', '1195', '1584', '1599', '1197', '1323', '1677'];
  constructor(private callNumber: CallNumber, public alertCtrl: AlertController) { }


  onCall(number) {

    const confirm = this.alertCtrl.create({
      title: 'ยืนยัน ?',
      message: `ต้องการโทรฉุกเฉินหมายเลข ${number} หรือไม่`,
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            console.log('ยกเลิก');
          }
        },
        {
          text: 'โทร',
          handler: () => {
            this.callPhone(number)
          }
        }
      ]
    });
    confirm.present();
  }
  
  callPhone(number) {
    this.callNumber.callNumber(number, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
    // window.open("tel:" + number);
  }


}



