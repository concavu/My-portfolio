import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../../services/project';
import { ProjectCardComponent } from './project-card/project-card';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.css'
})
export class ProjectsSection implements OnInit {
  selectedCategory: string = 'all';
  projects: Project[] = [];
  activeModal: { url: string; title: string } | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filterCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  openLightbox(data: { url: string; title: string }): void {
    this.activeModal = data;
  }

  closeLightbox(): void {
    this.activeModal = null;
  }
}