import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="theme-toggle-btn"
      (click)="themeService.toggleTheme()"
      [attr.aria-label]="themeService.isDark() ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'"
      [title]="themeService.isDark() ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'">
      @if (themeService.isDark()) {
        <!-- Icon Mặt Trăng (Moon) cho chế độ Tối -->
        <svg class="theme-icon moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      } @else {
        <!-- Icon Mặt Trời (Sun) cho chế độ Sáng -->
        <svg class="theme-icon sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
      }
    </button>
  `,
  styleUrl: './theme-toggle.css'
})
export class ThemeToggle {
  readonly themeService = inject(ThemeService);
}