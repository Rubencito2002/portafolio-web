import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  organization: string;
  date?: string;
  description: string;
  link?: string;
  technologies: string[];  // Nueva propiedad para almacenar tecnologías asociadas
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})

export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [
    {
      title: 'Fundamentos de Angular',
      organization: 'OpenWebinars',
      description: 'Completado el curso de fundamentos de Angular.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/5QIG?type=png',
      technologies: ['Angular']
    },
    {
      title: 'Python 3 desde cero',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Python desde cero.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/A2lM?type=png',
      technologies: ['Python']
    },
    {
      title: 'Curso de Django',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Django.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/Dt89?type=png',
      technologies: ['Python', 'Django']
    },
    {
      title: 'Gestion de Formulario en Django',
      organization: 'OpenWebinars',
      description: 'Completado el taller de gestión de formularios en Django.',
      date: 'Noviembre 2024',
      link: 'https://openwebinars.net/certificado/70kb?type=png',
      technologies: ['Python', 'Django']
    },
    {
      title: 'Proyecto con Bootstrap y CSS propio',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Bootstrap y CSS propio.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/6cWi?type=png',
      technologies: ['Bootstrap', 'CSS']
    },
    {
      title: 'Java 9: Nueva filosofía y funcionalidades',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Java 9.',
      link: 'https://openwebinars.net/certificado/R0GKq?type=png',
      technologies: ['Java']
    },
    {
      title: 'Introducción a Docker',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Introducción a Docker.',
      date: 'Octubre 2023',
      link: 'https://openwebinars.net/certificado/SW0r?type=png',
      technologies: ['Docker']
    },
    {
      title: 'Crear un entorno de desarrollo con Docker con Interfaz Gráfica',
      organization: 'OpenWebinars',
      description: 'Completado el taller de crear un entorno de desarrollo con Docker.',
      link: 'https://openwebinars.net/certificado/qd7QJ?type=png',
      technologies: ['Docker']
    },
    {
      title: 'Introducción a la Inteligencia Artificial',
      organization: 'OpenWebinars',
      description: 'Completado el taller sobre IA.',
      link: 'https://openwebinars.net/certificado/55prd?type=png',
      technologies: ['Inteligencia Artificial']
    },
    {
      title: 'Programación web con PHP y Symfony',
      organization: 'Formación Online',
      description: 'Curso de programación para crear páginas web.',
      technologies: ['PHP', 'Symfony']
    }
  ];

  technologies: string[] = [];
  filteredCertifications: Certification[] = this.certifications;

  ngOnInit(): void {
    this.technologies = Array.from(
      new Set(this.certifications.flatMap(cert => cert.technologies))
    );
  }

  certificationsToShow: number = 3;

  filterCertifications(technology: string): void {
    if (technology === 'all') {
      this.filteredCertifications = this.certifications;
    } else {
      this.filteredCertifications = this.certifications.filter(cert =>
        cert.technologies.includes(technology)
      );
    }
    this.certificationsToShow = 3;
  }

  // Métodos para mostrar más o menos proyectos
  showMoreCertifications(): void {
    this.certificationsToShow += 3;
  }

  showLessCertifications(): void {
    this.certificationsToShow = 3;
  }
}
