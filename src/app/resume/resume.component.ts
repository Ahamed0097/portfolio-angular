import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(private renderer: Renderer2){

  }
  DownloadFile(){
    const link= this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','../../assets/Resume_ahamednoor.pdf');
    link.setAttribute('download','Resume_ahamednoor.pdf');
    link.click();
    link.remove(); 

  }

}
