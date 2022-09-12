import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstatusComponent } from './userstatus.component';

describe('UserstatusComponent', () => {
  let component: UserstatusComponent;
  let fixture: ComponentFixture<UserstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
