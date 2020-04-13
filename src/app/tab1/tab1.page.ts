import { Component } from '@angular/core';
import {SimpleService} from '../simple-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  myForm:FormGroup;

  constructor(public navCtrl: NavController, public completeTestService: SimpleService) {

  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      country: new FormControl('', [
        Validators.required
      ])
    })
  }

  submit(): void {
    console.log(this.myForm.value.country);
  }
}
