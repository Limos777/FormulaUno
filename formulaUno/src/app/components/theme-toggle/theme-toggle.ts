import { Component, inject } from '@angular/core';
import { Theme } from '../../services/theme';
import { Button, ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-theme-toggle',
  imports: [ButtonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css'
})
export class ThemeToggle {
  private readonly themeService = inject(Theme);
 
  get isDark() {
    return this.themeService.isDark();
  }
 
  get themeIcon() {
    return this.isDark ? 'pi pi-sun' : 'pi pi-moon';
  }
 
  get themeLabel() {
    return this.isDark ? 'Tema Chiaro' : 'Tema Scuro';
  }
 
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
