import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image?: string; // Opcional para imagen del proyecto si no esta desplegado
  technologies: string[];
  link?: string; // Opcional para enlace del proyecto si no esta desplegado
  code: string;
  tipo: string[];
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
      technologies: ['JavaScript', 'React'],
      link: 'https://marvel-explorer-phi.vercel.app/',
      code: 'https://github.com/Rubencito2002/marvel-explorer',
      tipo	: ['Frontend']
    },
    {
      title: 'Proyecto de Bootstrap & CSS',
      description: 'Este proyecto muestra el uso de Bootstrap y CSS para crear una página web responsive y atractiva.',
      image: 'assets/img/png/proyectoBootstrap&CSS.png',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      link: 'https://proyecto-bootstrap-con-css.vercel.app/',
      code: 'https://github.com/Rubencito2002/ProyectoBootstrapConCSS',
      tipo	: ['Frontend']
    },
    {
      title: 'Gestor de Contactos en React con Bootstrap',
      description: 'Aplicación que permite gestionar contactos, desarrollada en React y React Bootstrap.',
      image: 'assets/img/png/proyectoGestordeContactos.png',
      technologies: ['Bootstrap', 'React' ],
      link: 'https://gestor-de-contactos.vercel.app/',
      code: 'https://github.com/Rubencito2002/gestor-de-contactos',
      tipo	: ['Frontend']
    },
    {
      title: 'Rock, Paper, Scissors',
      description: 'Juego interactivo de "Piedra, Papel o Tijeras" implementado en JavaScript con una interfaz visual intuitiva. Los resultados se muestran en pantalla y se celebra una victoria con una animación de confeti, con opción para reiniciar el juego.',
      image: 'assets/img/png/Rock-Paper-Scissor.png',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://rock-paper-scissor-flame-theta.vercel.app/',
      code: 'https://github.com/Rubencito2002/Rock-Paper--Scissor',
      tipo	: ['Frontend']
    },
    {
      title: 'Calculadora de IMC con Bootstrap',
      description: 'Aplicación web que calcula el Índice de Masa Corporal (IMC) a partir del peso y la altura ingresados, mostrando el resultado en una interfaz limpia y estilizada con Bootstrap.',
      image: 'assets/img/png/calculadora-imc.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://calculadora-imc-indol-psi.vercel.app/',
      code: 'https://github.com/Rubencito2002/calculadora-imc',
      tipo	: ['Frontend']
    },
    {
      title: 'Conversor de Moneda en Tiempo Real',
      description: 'Convierte cantidades entre diferentes monedas utilizando tasas de cambio actualizadas al instante.',
      image: 'assets/img/png/conversor-moneda.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://conversor-moneda-iota.vercel.app/',
      code: 'https://github.com/Rubencito2002/conversor-moneda',
      tipo	: ['Frontend']
    },
    {
      title: 'Sistema de Gestión Escolar en Java',
      description: 'Aplicación en Java para administrar estudiantes, asignaturas, profesores e inscripciones, con interfaz en Swing y base de datos MySQL, que permite añadir, actualizar, eliminar y ver los datos de manera organizada. Offline mientras encuentro un hosting barato para el backend.',
      technologies: ['Java'],
      code: 'https://github.com/Rubencito2002/StudentManagementSystem',
      tipo	: ['Backend']
    },
    {
      title: 'Sistema de Gestión del Inventario y Venta de un Comercio.',
      description: 'Un sistema de gestión de inventarios es una aplicación tecnológica diseñada para supervisar y organizar el flujo de productos en un comercio y las ventas del propio comercio. Offline mientras encuentro un hosting barato para el backend.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django'],
      code: 'https://github.com/ieshm-2daw/proyectointegrado-ruben',
      tipo	: ['Fullstack']
    },
    {
      title: 'Tablero Kanban: Gestión de Tareas Eficiente',
      description: 'Organiza tus tareas de manera efectiva con nuestro Tablero Kanban. Visualiza el progreso de tus proyectos y mejora la colaboración en equipo a través de un sistema intuitivo y fácil de usar.',
      image: 'assets/img/png/tablero-kanban.png',
      technologies: ['HTML', 'Bootstrap', 'React'],
      code: 'https://github.com/Rubencito2002/kanban-board',
      link: 'https://gestor-eventos.vercel.app/',
      tipo	: ['Frontend']
    },
    {
      title: 'Gestor de Eventos y Reservas',
      description: 'Una plataforma web para gestionar eventos, permitiendo crear, editar y visualizar eventos, así como realizar reservas. Los usuarios pueden gestionar detalles como título, descripción, fecha, hora, ubicación y aforo máximo.',
      image: 'assets/img/png/gestor-eventos.png',
      technologies: ['HTML', 'Bootstrap', 'Angular'],
      code: 'https://github.com/Rubencito2002/gestor-eventos',
      link: 'https://kanban-tablero.vercel.app/',
      tipo	: ['Frontend']
    },
    {
      title: 'Gestor de Listas de Tareas con Firebase',
      description: 'Aplicación web para gestionar listas de tareas con autenticación y sincronización en tiempo real mediante Firebase. Colaborado con un compañero de clase.',
      image: 'assets/img/png/gestor-listas.png',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JS', 'Firebase'],
      code: 'https://github.com/Rubencito2002/Gestion-de-Listas',
      link: 'https://gestion-de-listas.vercel.app/',
      tipo	: ['Fullstack']
    }
  ];

  filteredProjects: Project[] = this.projects;

  // Obtener tecnologías únicas para los botones de filtrado
  technologies: string[] = Array.from(
    new Set(this.projects.flatMap(project => project.technologies))
  );

  tipos: string[] = Array.from(
    new Set(this.projects.flatMap(project => project.tipo))
  );

  projectsToShow: number = 3;

  filterProjects(technology: string): void {
    if (technology === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.technologies.includes(technology));
    }
    this.projectsToShow = 3;
  }

  filterProjectsTipo(tipo: string): void {
    if (tipo === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.tipo.includes(tipo));
    }
    this.projectsToShow = 3;
  }

  // Métodos para mostrar más o menos proyectos
  showMoreProjects(): void {
    this.projectsToShow += 3;
  }

  showLessProjects(): void {
    this.projectsToShow = 3;
  }
}
