import { Component, OnInit} from '@angular/core';
import {NavController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Platform } from '@ionic/angular';
import {AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
 
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

import { CalendarComponentOptions } from 'ion2-calendar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {
  userEmail: string;
  date: string;
  type: 'string';
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticationService,
    public platform: Platform,
    private afs:AngularFirestore
  ) {
    this.afs.collection('appointment').valueChanges().subscribe(data=>{console.log(data);
    })
   }

  ngOnInit() {
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })
    
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
  dateMulti: string[];
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'danger'
  };
    onChange($event) {
    console.log($event);
  }


}
