import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeToggle],
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  userName = 'Trần Hoàng Anh Vũ';
}