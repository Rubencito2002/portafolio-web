// src/app/home/home.component.ts
import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { FooterComponent } from '../footer/footer.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ResourcesComponent } from '../resources/resources.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectsComponent, SkillsComponent, FooterComponent, CertificationsComponent, ResourcesComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
}
