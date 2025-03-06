import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Resource {
  title: string;
  type: 'Libro' | 'Curso' | 'Herramienta' | 'Documentación' | 'Tutorial';
  description: string;
  link: string;
  languages: string[];
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})

export class ResourcesComponent {
  resources: Resource[] = [
    {
      title: 'La guía para principiantes de Git y Github',
      type: 'Herramienta',
      description: 'Un tutorial para poder empezar a usar git y github.',
      link: 'https://www.freecodecamp.org/espanol/news/guia-para-principiantes-de-git-y-github/?authuser=1',
      languages: ['Git', 'GitHub']
    },
    {
      title: '¡Tu primer proyecto en Django!',
      type: 'Tutorial',
      description: 'El primer paso es iniciar un nuevo proyecto de Django. Básicamente, significa que vamos a lanzar unos scripts proporcionados por Django que nos crearán el esqueleto de un proyecto de Django. Son solo un montón de directorios y archivos que usaremos más tarde.',
      link: 'https://tutorial.djangogirls.org/es/django_start_project/?authuser=1',
      languages: ['Django']
    },
    {
      title: 'Direcciones IP elásticas',
      type: 'Documentación',
      description: 'Documentación oficial de AWS sobre direcciones IP elásticas.',
      link: 'https://docs.aws.amazon.com/es_es/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#:~:text=Para%20asociar%20una%20direcci%C3%B3n%20IP,Acciones%2C%20Asociar%20direcci%C3%B3n%20IP%20el%C3%A1stica.',
      languages: ['AWS']
    },
    {
      title: 'Docker for Developers',
      type: 'Herramienta',
      description: 'Recursos y tutoriales para desarrollar y desplegar aplicaciones usando Docker.',
      link: 'https://www.docker.com/',
      languages: ['Docker']
    },
    {
      title: 'Bootstrap Documentation',
      type: 'Documentación',
      description: 'Documentación oficial de Bootstrap para crear sitios web responsivos rápidamente.',
      link: 'https://getbootstrap.com/docs/',
      languages: ['Bootstrap', 'CSS']
    },
    {
      title: 'Figma',
      type: 'Herramienta',
      description: 'Diseño de interfaces.',
      link: 'https://www.figma.com/es-es/',
      languages: ['Figma']
    },
    {
      title: 'CSS Gradient',
      type: 'Herramienta',
      description: 'Generador que permite crear gradientes de colores para CSS.',
      link: 'https://cssgradient.io/',
      languages: ['CSS']
    },
    {
      title: 'Herramienta de Desarrollo',
      type: 'Herramienta',
      description: 'Decenas de hojas de referencia rápida y trucos para lenguajes de programación y herramientas de desarrollo.',
      link: 'https://quickref.me/',
      languages: ['Generico']
    }
  ];

  languages: string[] = [];
  filteredResources: Resource[] = this.resources;

  ngOnInit(): void {
    this.languages = Array.from(
      new Set(this.resources.flatMap(res => res.languages))
    );
  }

  resourcesToShow: number = 3;

  filterResources(technology: string): void {
    if (technology === 'all') {
      this.filteredResources = this.resources;
    } else {
      this.filteredResources = this.resources.filter(resource =>
        resource.languages.includes(technology)
      );
    }
    this.resourcesToShow = 3;
  }

  // Métodos para mostrar más o menos proyectos
  showMoreResources(): void {
    this.resourcesToShow += 3;
  }

  showLessResources(): void {
    this.resourcesToShow = 3;
  }
}
