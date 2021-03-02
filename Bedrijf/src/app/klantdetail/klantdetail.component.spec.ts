import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlantdetailComponent } from './klantdetail.component';

describe('KlantdetailComponent', () => {
  let component: KlantdetailComponent;
  let fixture: ComponentFixture<KlantdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlantdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
