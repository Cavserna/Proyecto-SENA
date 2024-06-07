import { Component } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: User[] = [];

  onSubmit(formValue:User){
    this.usuario.push(formValue);
    console.log(this.usuario)
  }
  

}
