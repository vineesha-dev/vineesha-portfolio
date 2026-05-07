import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Home,
    About,
    Projects,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}