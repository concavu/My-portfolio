import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCardComponent } from './project-card';

describe('ProjectCardComponent', () => {
  let component: ProjectCardComponent;
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput('project', {
      title: 'Network project',
      description: 'A sample project card.',
      category: 'network',
      categoryLabel: 'NETWORK',
      visualLabel: '01 / TOPOLOGY',
      tags: ['VLAN'],
      link: 'https://github.com/example/network'
    });
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
