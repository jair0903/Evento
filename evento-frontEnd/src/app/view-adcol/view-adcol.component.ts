import { Component, OnInit } from '@angular/core';
import {MaterialModule} from '../material.modules';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-view-adcol',
  templateUrl: './view-adcol.component.html',
  styleUrls: ['./view-adcol.component.css']
})
export class ViewAdcolComponent implements OnInit {

  // Variables
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

  	this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
