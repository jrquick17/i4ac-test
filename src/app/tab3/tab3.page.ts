import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController} from '@ionic/angular';
import {SimpleService} from '../simple-service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
