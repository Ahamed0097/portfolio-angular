import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // private darkTheme:boolean=false;

  // constructor() { 
  //   this.darkTheme=localStorage.getItem('theme') ==='dark';
  //   this.updateTheme();
  // }

  // isDarkTheme():boolean{
  //   return this.darkTheme;
  // }

  // toggleTheme():void{
  //   this.darkTheme = !this.darkTheme;
  //   localStorage.setItem('theme',this.darkTheme? 'dark':'light');
  //   this.updateTheme();
  // }

  // private updateTheme():void {
  //   if(this.darkTheme){
  //     document.body.classList.add('dark-theme');
  //     document.body.classList.remove('light-theme');
  //   }else{
  //     document.body.classList.add('light-theme');
  //     document.body.classList.remove('dark-theme');
  //   }
  // }


  private darkTheme = 'dark-theme';
  private lightTheme = 'light-theme';

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    } else {
      this.setDarkTheme(); // Set dark theme by default
    }
  }

  toggleTheme(): void {
    if (this.isDarkTheme()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  isDarkTheme(): boolean {
    return document.body.classList.contains(this.darkTheme);
  }

  private setDarkTheme(): void {
    document.body.classList.remove(this.lightTheme);
    document.body.classList.add(this.darkTheme);
    localStorage.setItem('theme', this.darkTheme);
  }

  private setLightTheme(): void {
    document.body.classList.remove(this.darkTheme);
    document.body.classList.add(this.lightTheme);
    localStorage.setItem('theme', this.lightTheme);
  }
}
