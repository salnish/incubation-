import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApplicationComponent } from './view-application.component';

describe('ViewApplicationComponent', () => {
  let component: ViewApplicationComponent;
  let fixture: ComponentFixture<ViewApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
