import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StandRegister } from '../models/StandRegister';

@Injectable({
  providedIn: 'root'
})
export class StandService {

  API_URI = 'https://api.expoeventoscol.com/api/stand';

  constructor(private http: HttpClient) { }

  getRegisters(stand: string){
    return this.http.get(`${this.API_URI}/${stand}`)
  };

  getRegistersCount(stand: string){
    return this.http.get(`${this.API_URI}/${stand}/count`)
  };

  getRegistersTime(stand: string){
    return this.http.get(`${this.API_URI}/${stand}/time`)
  };

  getRegisterByStandById(stand: string, idNum: string){
    return this.http.get(`${this.API_URI}/${stand}/${idNum}`)
  };

  newRegister(stand: string, register: StandRegister){
    return this.http.post(`${this.API_URI}/${stand}`, register)
  };
}
