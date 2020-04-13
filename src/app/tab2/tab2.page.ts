import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {SimpleService} from '../simple-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
