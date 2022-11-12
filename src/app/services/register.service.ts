import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Register } from '../models/Register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URI = 'https://api.expoeventoscol.com/api/people';

  constructor(private http: HttpClient) { }

  getRegisters(){
    return this.http.get(`${this.API_URI}`)
  };

  getRegistersCount(){
    return this.http.get(`${this.API_URI}/count`)
  };

  getRegistersTime(){
    return this.http.get(`${this.API_URI}/time`)
  };

  getResume(){
    return this.http.get(`${this.API_URI}/resume`)
  };

  getRegisterById(idNum: string){
    return this.http.get(`${this.API_URI}/byid/${idNum}`)
  };

  getRegisterByEmail(email: string){
    return this.http.get(`${this.API_URI}/byemail/${email}`)
  };

  newRegister(register: Register){
    return this.http.post(`${this.API_URI}`, register)
  };
}