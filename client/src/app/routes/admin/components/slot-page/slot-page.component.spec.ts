import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPageComponent } from './slot-page.component';

describe('SlotPageComponent', () => {
  let component: SlotPageComponent;
  let fixture: ComponentFixture<SlotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlotPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
