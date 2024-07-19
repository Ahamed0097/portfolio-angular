import { Component, OnInit } from '@angular/core';
import { ProjservicesService } from '../services/projservices.service';
import { project } from '../models/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  featuredProject ={} as project;

  constructor(private projectservice:ProjservicesService){

  }
  ngOnInit(): void {
    this.featuredProject= this.projectservice.getprojectById(0);
  }


}
