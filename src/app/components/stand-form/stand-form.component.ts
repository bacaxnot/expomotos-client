import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-stand-form',
  templateUrl: './stand-form.component.html',
  styleUrls: ['./stand-form.component.css']
})
export class StandFormComponent implements OnInit {

  stand: string = this.activatedRoute.snapshot.params.stand;
  imgName: string = this.activatedRoute.snapshot.params.imgName;
  pathimg: string = `../../assets/img/stands/${this.imgName}.png`
  regStatus: any = {
    message: "",
    global: true,
    stand: false,
    regStandCount: ""
  };
  unexpectedErrorMssg: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private standService : StandService, private route: Router) { }

  ngOnInit(): void { }

  onSubmit(form: NgForm): void{

    this.standService.newRegister(this.stand, form.value).subscribe(
      res => {
        this.regStatus = res;
        console.log(this.regStatus.regStandCount)
        if (this.regStatus.regStandCount == "9"){
          this.route.navigate([`/success/${form.value.idNumber}/${this.stand}/true`]);
        }else{
          this.route.navigate([`/success/${form.value.idNumber}/${this.stand}`]);
        }
      },
      err => {
        this.regStatus = err.error;
        if(err.status =! 404){ this.unexpectedErrorMssg = true };

      })
    }
  }

