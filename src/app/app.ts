import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Home,
    About,
    Projects,
    Contact,
    Footer,
    Skills
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}