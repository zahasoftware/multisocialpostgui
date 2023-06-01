import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVideoPostFormComponent } from './app-video-post-form.component';

describe('AppVideoPostFormComponent', () => {
  let component: AppVideoPostFormComponent;
  let fixture: ComponentFixture<AppVideoPostFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppVideoPostFormComponent]
    });
    fixture = TestBed.createComponent(AppVideoPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
