// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';  // Asegúrate de la ruta correcta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  email = 'ruben.machado1920@gmail.com';
}
