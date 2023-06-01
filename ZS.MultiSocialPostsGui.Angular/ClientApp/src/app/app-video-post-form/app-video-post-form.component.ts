import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-post-form',
  templateUrl: './video-post-form.component.html',
  styleUrls: ['./video-post-form.component.css']
})
export class VideoPostFormComponent {
  videoPost: any = {};
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  submitForm() {
    const formData: FormData = new FormData();
    formData.append('title', this.videoPost.title);
    formData.append('description', this.videoPost.description);
    formData.append('video', this.selectedFile, this.selectedFile?.name);

    this.http.post('/api/video-posts', formData).subscribe(
      response => {
        // Handle success
        console.log('Post created successfully');
      },
      error => {
        // Handle error
        console.error('Error creating post', error);
      }
    );
  }
}
