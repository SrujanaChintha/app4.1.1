import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    name = '';
    isFocused = false;
  
    onFocus() {
      this.isFocused = true;
    }
  
    onBlur() {
      this.isFocused = false;
    }
  
}