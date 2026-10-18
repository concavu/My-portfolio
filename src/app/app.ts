import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { HeroSection } from './components/hero-section/hero-section';
import { AboutSection } from './components/about-section/about-section';
import { SkillsSection } from './components/skills-section/skills-section';
import { ProjectsSection } from './components/projects-section/projects-section';
import { ContactSection } from './components/contact-section/contact-section';
import { TerminalWidget } from './components/terminal-widget/terminal-widget';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
    TerminalWidget
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  cursorX = 0;
  cursorY = 0;
  cursorVisible = false;
  cursorInteractive = false;
  cursorPressed = false;

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;

    this.cursorX = event.clientX;
    this.cursorY = event.clientY;
    this.cursorVisible = true;
    this.cursorInteractive =
      event.target instanceof Element &&
      !!event.target.closest('a, button, input, textarea, select, [role="button"], [tabindex]:not([tabindex="-1"])');
  }

  @HostListener('document:pointerdown', ['$event'])
  onPointerDown(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    this.cursorPressed = true;
  }

  @HostListener('document:pointerup', ['$event'])
  onPointerUp(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    this.cursorPressed = false;
  }

  @HostListener('document:pointerout', ['$event'])
  onPointerOut(event: PointerEvent): void {
    if (!event.relatedTarget) {
      this.cursorVisible = false;
      this.cursorInteractive = false;
    }
  }
}