import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {

  constructor(private themeService: ThemeService){}

  toggleTheme():void{
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean{
    return this.themeService.isDarkTheme();
  }
  
}
