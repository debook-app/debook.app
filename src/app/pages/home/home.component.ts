import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // import the video into the 'assets' folder and change the name, 
  // then replace it with the one below
  videoUrl = 'assets/media/superDemo.mp4';
}
