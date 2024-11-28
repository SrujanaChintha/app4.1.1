import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
    mission = 'To deliver excellence in every project!';
    imgUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
    showDescription = false;
    description = 'We are a leading company in the field of software development.';
  
    toggleDescription() {
      this.showDescription = !this.showDescription;
    }
  }
  