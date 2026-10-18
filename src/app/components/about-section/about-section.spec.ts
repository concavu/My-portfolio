import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutSection } from './about-section';

describe('AboutSection', () => {
  let component: AboutSection;
  let fixture: ComponentFixture<AboutSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSection],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the existing education details and study focus', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#resume')?.textContent).toContain('Đại học Văn Hiến');
    expect(element.querySelector('#resume')?.textContent).toContain('2023–2027');
    expect(element.querySelectorAll('.focus-card li')).toHaveLength(3);
  });
});
