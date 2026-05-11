import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit, OnDestroy {
  scrolled = false;
  activeSection = 'home';
  readonly sections = ['home', 'about', 'skills', 'projects', 'contact'];
  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  ngOnInit(): void {
    this.onScroll();

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    queueMicrotask(() => {
      for (const id of this.sections) {
        const el = document.getElementById(id);
        if (el) this.observer?.observe(el);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

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
