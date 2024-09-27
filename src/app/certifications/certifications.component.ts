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
      link: 'https://openwebinars.net/certificado/5QIG?type=png'
    },
    {
      title: 'Python 3 desde cero',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Python desde cero.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/A2lM?type=png'
    },
    {
      title: 'Curso de Django',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Django.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/Dt89?type=png'
    },
    {
      title: 'Gestion de Formulario en Django',
      organization: 'OpenWebinars',
      description: 'Completado el talle de gestion de formulario en Django.',
      date: 'Noviembre 2024',
      link: 'https://openwebinars.net/certificado/70kb?type=png'
    },
    {
      title: 'Proyecto con Bootstrap y CSS propio',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Bootstrap y CSS propio.',
      date: 'Julio 2024',
      link: 'https://openwebinars.net/certificado/6cWi?type=png'
    },
    {
      title: 'Java 9: Nueva filosofia y funcionalidades',
      organization: 'OpenWebinars',
      description: 'Completado el taller de Java 9.',
      link: 'https://openwebinars.net/certificado/R0GKq?type=png'
    },
    {
      title: 'Introducción a Docker',
      organization: 'OpenWebinars',
      description: 'Completado el curso de Introduccion a Docker.',
      date: 'Octubre 2023',
      link: 'https://openwebinars.net/certificado/SW0r?type=png'
    },
    {
      title: 'Crear un entorno de desarrollo con Docker con Interfaz Grafica',
      organization: 'OpenWebinars',
      description: 'Completado el taller de en crear un entorno de desarrollo con docker.',
      link: 'https://openwebinars.net/certificado/qd7QJ?type=png'
    },
    {
      title: 'Introducción a la Integencia Artificial',
      organization: 'OpenWebinars',
      description: 'Completado el taller sobre IA.',
      link: 'https://openwebinars.net/certificado/55prd?type=png'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
