import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule para *ngIf y *ngFor

interface Certification {
  title: string;
  organization: string;
  date?: string;
  description: string;
  link?: string; // Opcional para enlace del certificado
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule aquí
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})

export class CertificationsComponent implements OnInit {
  certifications: Certification[] = [
    {
      title: 'Fundamentos de Angular',
      organization: 'OpenWebinars',
      description: 'Completado el curso de fundamentso de angular.',
      date: 'Julio 2024',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Python 3 desde cero',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Python desde cero.',
      date: 'Julio 2024',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Curso de Django',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Django.',
      date: 'Julio 2024',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Gestion de Formulario en Django',
      organization: 'OpenWebinars',
      description: 'Completado el talle de gestion de formulario en Django.',
      date: 'Noviembre 2024',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Proyecto con Bootstrap y CSS propio',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Bootstrap y CSS propio.',
      date: 'Julio 2024',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Java 9: Nueva filosofia y funcionalidades',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Java 9.',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Introducción a Docker',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Introduccion a Docker.',
      date: 'Octubre 2023',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Crear un entorno de desarrollo con Docker con Interfaz Grafica',
      organization: 'OpenWebinars',
      description: 'Completado el taller de en crear un entorno de desarrollo con docker.',
      link: 'https://linktocertificate.com'
    },
    {
      title: 'Introducción a la Integencia Artificial',
      organization: 'OpenWebinars',
      description: 'Completado el taller sobre IA.',
      link: 'https://linktocertificate.com'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
