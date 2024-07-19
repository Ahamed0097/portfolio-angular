import { Injectable } from '@angular/core';
import { project } from '../models/projects';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class ProjservicesService {

  projects: project[]=[
    {id:0,name:"JOB PORTAL SYSTEM",summary:'A Project of Job Portal System Using Angular And Typescript With Three Module',description:"The JOB PORTAL SYSTEM, developed using Angular and TypeScript, features three main modules: Admin, Job Provider, and Job Seeker. The admin can log in through a secure login page to manage job seekers and providers, and has the authority to terminate fake profiles and job posts. Job seekers can register, log in, search for jobs, and apply to specific positions. Job providers can register their companies, log in, and post job vacancies. This user-friendly system also includes responsive design, real-time job alerts, and a comprehensive dashboard for easy profile and job management.",projectlink:'',tags:[Tag.ANGULAR,Tag.TYPESCRIPT],pictures:["../../assets/proj1-1.png","../../assets/proj1-2.png","../../assets/proj1-3.png"]},
    {id:1,name:"portfolio",summary:'test summary',description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",projectlink:'',tags:[Tag.HTML,Tag.CSS],pictures:["../../assets/img-1.png","../../assets/img-2.png","../../assets/img-3.png"]},
    {id:2,name:"MOVIE RATING APP",summary:'Project of Movie Rating App Using Angular And Typescript With User Eperience',description:"IMDB 2.0 is a user-friendly web application designed for movie enthusiasts. Users can effortlessly sign up and log in through dedicated pages. After logging in, they are directed to a dynamic home page featuring a diverse range of movies categorized by genres.Each movie page allows users to rate and review films, fostering a community-driven environment for sharing opinions. The app offers personalized movie recommendations and a search functionality, ensuring users find their perfect films easily.With its intuitive interface and visually appealing design, IMDB 2.0 delivers an exceptional browsing experience, making it the ultimate destination for movie ratings and reviews.",projectlink:'',tags:[Tag.ANGULAR,Tag.TYPESCRIPT],pictures:["../../assets/imgmovie1.png","../../assets/imgmovie2.png","../../assets/imgmovie3.png","../../assets/imgmovie4.png"]}

  ]

  constructor() { }

  getprojects(){
    return this.projects;
  }

  getprojectById(id:number) :project{
    let project = this.projects.find(project =>project.id ===id);
    if(project===undefined){
      throw new TypeError('No project that match the id:'+id);
    }
    return project;
  }
}
