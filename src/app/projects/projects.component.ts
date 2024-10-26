import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  code: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Búsqueda de Personajes de Marvel',
      description: 'Este proyecto fue uno de los primeros que desarrollé utilizando REACT, es un buscador de personajes que utiliza la API de Marvel.',
      image: 'assets/img/png/proyectoMarvel.png',
      technologies: ['React', 'JavaScript'],
      link: 'https://marvel-explorer-phi.vercel.app/',
      code: 'https://github.com/Rubencito2002/marvel-explorer'
    },
    {
      title: 'Proyecto de Bootstrap & CSS',
      description: 'Este proyecto muestra el uso de Bootstrap y CSS para crear una página web responsive y atractiva.',
      image: 'assets/img/png/proyectoBootstrap&CSS.png',
      technologies: ['Bootstrap', 'CSS'],
      link: 'https://proyecto-bootstrap-con-css.vercel.app/',
      code: 'https://github.com/Rubencito2002/ProyectoBootstrapConCSS'
    },
    {
      title: 'Gestor de Contactos en React con Bootstrap',
      description: 'Aplicación que permite gestionar contactos, desarrollada en React y React Bootstrap.',
      image: 'assets/img/png/proyectoGestordeContactos.png',
      technologies: ['React', 'Bootstrap'],
      link: 'https://gestor-de-contactos.vercel.app/',
      code: 'https://github.com/Rubencito2002/gestor-de-contactos'
    },
    {
      title: 'Rock, Paper, Scissors',
      description: 'Juego interactivo de "Piedra, Papel o Tijeras" implementado en JavaScript con una interfaz visual intuitiva. Los resultados se muestran en pantalla y se celebra una victoria con una animación de confeti, con opción para reiniciar el juego.',
      image: 'assets/img/png/Rock-Paper-Scissor.png',
      technologies: ['JavaScript'],
      link: 'https://rock-paper-scissor-flame-theta.vercel.app/',
      code: 'https://github.com/Rubencito2002/Rock-Paper--Scissor'
    },
    {
      title: 'Calculadora de IMC con Bootstrap',
      description: 'Aplicación web que calcula el Índice de Masa Corporal (IMC) a partir del peso y la altura ingresados, mostrando el resultado en una interfaz limpia y estilizada con Bootstrap.',
      image: 'assets/img/png/calculadora-imc.png',
      technologies: ['JavaScript', 'Bootstrap'],
      link: 'https://calculadora-imc-indol-psi.vercel.app/',
      code: 'https://github.com/Rubencito2002/calculadora-imc'
    },
    {
      title: 'Conversor de Moneda en Tiempo Real',
      description: 'Convierte cantidades entre diferentes monedas utilizando tasas de cambio actualizadas al instante.',
      image: 'assets/img/png/conversor-moneda.png',
      technologies: ['JavaScript', 'Bootstrap'],
      link: 'https://conversor-moneda-iota.vercel.app/',
      code: 'https://github.com/Rubencito2002/conversor-moneda'
    }
  ];

  filteredProjects: Project[] = this.projects;

  filterProjects(technology: string): void {
    if (technology === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.technologies.includes(technology)
      );
    }
  }
}
