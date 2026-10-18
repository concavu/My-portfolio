import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide categorized projects with repository links', () => {
    const projects = service.getProjects();

    expect(projects).toHaveLength(3);
    expect(projects.map(project => project.category)).toEqual(['network', 'cloud', 'ai']);
    expect(projects.every(project => project.tags.length > 0 && project.link.startsWith('https://'))).toBe(true);
  });
});
