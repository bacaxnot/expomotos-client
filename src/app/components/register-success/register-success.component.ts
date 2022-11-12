import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  finalStand: boolean = false;
  mainRegister: boolean = false;
  standRegister: boolean = false;
  stand: string = '';
  id: string = '';

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    this.id = params.idNumber;
    this.stand = params.stand;

    if (params.final){
      this.finalStand = true;
    }else if(params.stand){
      this.standRegister = true;
    }else if(params.idNumber){
      this.mainRegister = true;
    }
  }

}
