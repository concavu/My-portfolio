import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose working email, phone, and GitHub links', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.contact-card a[href="mailto:stanhvu123456@gmail.com"]')).toBeTruthy();
    expect(element.querySelector('.contact-card a[href="tel:+84856865932"]')).toBeTruthy();
    expect(element.querySelector('.contact-card a[href="https://github.com/concavu"]')).toBeTruthy();
  });
});
