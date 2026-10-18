import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../services/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCardComponent {
  @Input() project!: Project;
  @Input() index = 1;
  @Output() previewImage = new EventEmitter<{ url: string; title: string }>();

  onPreview(): void {
    if (this.project.image) {
      this.previewImage.emit({
        url: this.project.image,
        title: this.project.title
      });
    }
  }
}