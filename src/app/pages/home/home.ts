import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {SimpleService} from '../../app/services/simple-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myForm:FormGroup;

  constructor(
    public navCtrl:NavController,
    // public completeTestService:SimpleService
  ) {

  }

  ngOnInit():void {
    this.myForm = new FormGroup({
      country: new FormControl('', [
        Validators.required
      ])
    })
  }

  submit():void {
    console.log(this.myForm.value.country);
  }

}
