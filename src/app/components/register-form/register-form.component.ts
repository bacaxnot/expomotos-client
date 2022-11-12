import { Component, HostBinding, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Register } from '../../models/Register'
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  register: Register = {
    completeName: '',
    idNumber: NaN,
    email: '',
    phoneNumber: NaN,
    favBrand: ''  
  };
  brands = [
    'AUTECO',
    'AKT',
    'BAJAJ',
    'HERO',
    'HONDA DREAM',
    'HONDA',
    'SUZUKI',
    'YAMAHA'
  ];
  regStatus: any = {
    message: "",
    idNumber: false
  };
  unexpectedErrorMssg: boolean = false;
  
  constructor(private registerService : RegisterService, private route: Router) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm){

    delete form.value.privacyCheck

    this.registerService.newRegister(form.value).subscribe(
      res => {
        this.regStatus = res;
        this.route.navigate([`/success/${form.value.idNumber}`]);
      },
      err => {
        this.regStatus = err.error;
        if(err.status =! 404){ this.unexpectedErrorMssg = true };

      })
  }
  
}
  



//[(ngModel)]='register.phoneNumber'