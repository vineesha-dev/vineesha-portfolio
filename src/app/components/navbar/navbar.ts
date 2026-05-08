import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    this.closeMobileMenu();

    if (section) {
      requestAnimationFrame(() => {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
        const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top,
          behavior: 'smooth',
        });

        window.history.replaceState(null, '', `#${sectionId}`);
      });
    }
  }

  private closeMobileMenu(): void {
    const menu = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    menu?.classList.remove('show');
    toggler?.classList.add('collapsed');
    toggler?.setAttribute('aria-expanded', 'false');
  }
}
