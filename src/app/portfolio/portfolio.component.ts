import { Component, OnInit } from '@angular/core';
import { project } from '../models/projects';
import { Tag } from '../models/tag';
import { ProjservicesService } from '../services/projservices.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects={} as project[];

  constructor(private projectservice:ProjservicesService){

  }
  ngOnInit(): void {
    this.projects=this.projectservice.getprojects();
  }

    
  
}
