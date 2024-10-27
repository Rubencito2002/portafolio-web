import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image?: string; // Opcional para imagen del proyecto si no esta desplegado
  technologies: string[];
  link?: string; // Opcional para enlace del proyecto si no esta desplegado
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
    },
    {
      title: 'Sistema de Gestión Escolar en Java',
      description: 'Aplicación en Java para administrar estudiantes, asignaturas, profesores e inscripciones, con interfaz en Swing y base de datos MySQL, que permite añadir, actualizar, eliminar y ver los datos de manera organizada. Offline mientras encuentro un hosting barato para el backend.',
      technologies: ['Java'],
      code: 'https://github.com/Rubencito2002/StudentManagementSystem'
    },
    {
      title: 'Sistema de Gestión del Inventario y Venta de un Comercio.',
      description: 'Un sistema de gestión de inventarios es una aplicación tecnológica diseñada para supervisar y organizar el flujo de productos en un comercio y las ventas del propio comercio. Offline mientras encuentro un hosting barato para el backend.',
      technologies: ['Django'],
      code: 'https://github.com/ieshm-2daw/proyectointegrado-ruben'
    }
  ];

  filteredProjects: Project[] = this.projects;

  // Obtener tecnologías únicas para los botones de filtrado
  technologies: string[] = Array.from(
    new Set(this.projects.flatMap(project => project.technologies))
  );

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
