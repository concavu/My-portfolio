import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminalWidget } from './terminal-widget';

describe('TerminalWidget', () => {
  let component: TerminalWidget;
  let fixture: ComponentFixture<TerminalWidget>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerminalWidget],
    }).compileComponents();

    fixture = TestBed.createComponent(TerminalWidget);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
