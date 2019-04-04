import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUikitComponent } from './login-uikit.component';

describe('LoginUikitComponent', () => {
  let component: LoginUikitComponent;
  let fixture: ComponentFixture<LoginUikitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUikitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUikitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
