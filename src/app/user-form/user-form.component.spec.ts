import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponents } from './user-form.component';

describe('UserFormComponents', () => {
  let component: UserFormComponents;
  let fixture: ComponentFixture<UserFormComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponents ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
