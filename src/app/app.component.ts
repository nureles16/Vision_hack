import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  a = "assets/images/att.jpg";
  b = "assets/images/uni.jpg";
  b1 = "assets/images/food.png";
  b2 = "assets/images/patho.jpg";
  b3 = "assets/images/car.jpg";
  b4 = "assets/images/hand.png";
  b5 = "assets/images/traffic.jpg";
  f = "assets/images/т.png";

  c = true;
  formData = {
    name: '',
    email: '',
    password: '',
  };
  toggleC(value: boolean): void {
    this.c = value;
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted!', this.formData);
      // You can perform actions like sending the data to a backend server here along with the file
      // For example: create FormData object and append form data including the file
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('email', this.formData.email);
    } else {
      console.log('Form is invalid!');
    }
  }
}
