import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../services/register.service';
import { StandService } from '../../services/stand.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  
  constructor(private registerService : RegisterService, private standService : StandService) { }

  ngOnInit(): void {
  }

}
