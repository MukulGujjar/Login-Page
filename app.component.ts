import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';

}






// app.controller('PasswordController', function() {
//     this.password = '';
//     this.toggleVisibility = function() {
//       const passwordInput = document.getElementById('password');
//       if (passwordInput.type === 'password') {
//         passwordInput.type = 'text';
//       } else {
//         passwordInput.type = 'password';
//       }
//     };
//   });

// hidePassword: boolean = true;
// togglePasswordVisibility() {
//   this.hidePassword = !this.hidePassword;
//   }}


 


