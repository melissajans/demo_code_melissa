import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOudeOefComponent } from './main-oude-oef.component';

describe('MainOudeOefComponent', () => {
  let component: MainOudeOefComponent;
  let fixture: ComponentFixture<MainOudeOefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOudeOefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOudeOefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
