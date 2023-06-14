import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPostFormComponent } from './app-video-post-form.component';

describe('AppVideoPostFormComponent', () => {
  let component: VideoPostFormComponent;
  let fixture: ComponentFixture<VideoPostFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoPostFormComponent]
    });
    fixture = TestBed.createComponent(VideoPostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
