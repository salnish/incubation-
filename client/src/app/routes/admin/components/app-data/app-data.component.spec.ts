import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDataComponent } from './app-data.component';

describe('AppDataComponent', () => {
  let component: AppDataComponent;
  let fixture: ComponentFixture<AppDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
