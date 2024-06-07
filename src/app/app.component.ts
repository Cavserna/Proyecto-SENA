import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './home/components/header/header.component';
import { BodyComponent } from './home/components/body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vitapet';
}
