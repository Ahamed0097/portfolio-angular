import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // constructor(private themeService: ThemeService){}

  // toggleTheme():void{
  //   this.themeService.toggleTheme();
  // }

  // isDarkTheme(): boolean{
  //   return this.themeService.isDarkTheme();
  // }


}
