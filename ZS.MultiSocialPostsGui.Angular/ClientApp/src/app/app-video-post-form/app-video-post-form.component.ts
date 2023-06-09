import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-video-post-form',
  templateUrl: './app-video-post-form.component.html',
  styleUrls: ['./app-video-post-form.component.css']
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
    formData.append('video', this.selectedFile as Blob, this.selectedFile?.name);

    this.http.post('/api/multisocialpost/video-post', formData).subscribe(
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
