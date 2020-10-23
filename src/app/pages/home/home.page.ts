import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {NavController} from '@ionic/angular';

import {SimpleService} from '../../services/simple-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  myForm:FormGroup;

  constructor(
    public completeTestService: SimpleService
  ) {

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
