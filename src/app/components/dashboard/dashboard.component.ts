import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

import { RegisterService } from '../../services/register.service';
import { StandService } from '../../services/stand.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //Other variables
  dataStatus: any;
  data: any = {};
  
  nregistros: number = 246
  nconcursantes = 154
  perconcursantes = Math.round(this.nconcursantes*10000/this.nregistros)/100
  //datos de recuento registros por stands
  datastands = [50,20,15,30,25,10,35,40,45,60]
  labelstands = ["AUTECO","AKT","BAJAJ","HERO","HONDA","NIU","ROYAL E.","SUZUKI","YAMAHA", "Z.BIKER"]
  colors = [
                  'blue',
                  'red',
                  'purple',
                  'green',
                  'gray',
                  'yellow',
                  'aqua',
                  'teal',
                  'fuchsia',
              ]

  

  constructor(private registerService : RegisterService, private standService : StandService) { }
  
  updateData(){
    this.registerService.getResume().subscribe(
      res => {
        this.data = res;
        //data
        this.nregistros = +this.data.totalReg;
        this.nconcursantes = +this.data.standCount10;
        this.datastands = [+this.data.autecoReg,
                          +this.data.aktReg,
                          +this.data.bajajReg,
                          +this.data.heroReg,
                          +this.data.hondaReg,
                          +this.data.niuReg,
                          +this.data.enfieldReg,
                          +this.data.suzukiReg,
                          +this.data.yamahaReg,
                          0]
        
      },
      err => {
        this.data = err.error;
        //if(err.status =! 404){ this.unexpectedErrorMssg = true };

      })
      console.log(this.data)
  }
  
  ngOnInit(){

    this.updateData();

    var chartstand1 = new Chart("chartstand1",{
      type:"bar",
      data:{
          labels: this.labelstands,
          datasets:[{
              label: "DataSet",
              data: this.datastands,
              backgroundColor:this.colors
          }]
      },
      options: {
        scales:{
          yAxes: [{
              display: true,
              ticks: {
                  suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                  // OR //
                  beginAtZero: true,   // minimum value will be 0.
                  max: Math.round(Math.max(...this.datastands.map((tuple) => Math.max(...this.datastands)))*1.2)
              }
          }]
      }
      }
    })

    var chartstand2 = new Chart("chartstand2",{
      type:"doughnut",
      data:{
          labels: this.labelstands,
          datasets:[{
              label: "DataSet",
              data: this.datastands,
              backgroundColor:this.colors
          }]
      },

    })


  }


  regs = [
    {
        "regDate": "2021-09-13T01:44:07.000Z"
    },
    {
        "regDate": "2021-09-13T03:33:05.000Z"
    },
    {
        "regDate": "2021-09-13T03:33:28.000Z"
    },
    {
        "regDate": "2021-09-13T03:33:49.000Z"
    },
    {
        "regDate": "2021-09-13T03:34:08.000Z"
    }
  ]
  
}

var regs = [
  {
      "regDate": "2021-09-13T01:44:07.000Z"
  },
  {
      "regDate": "2021-09-13T03:33:05.000Z"
  },
  {
      "regDate": "2021-09-13T06:33:28.000Z"
  },
  {
      "regDate": "2021-09-13T10:33:49.000Z"
  },
  {
      "regDate": "2021-09-13T12:34:08.000Z"
  }
]
      
var lista = []
for(let i in regs){
  lista.push(new Date(Date.parse(regs[i].regDate)))
}


console.log(lista);
