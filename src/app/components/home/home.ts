import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  readonly roles = [
    'ASP.NET Core Developer',
    'Angular Engineer',
    'SQL Server Specialist',
    'Full Stack Developer',
  ];
  currentRole = this.roles[0];

  private index = 0;
  private intervalId?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.roles.length;
      this.currentRole = this.roles[this.index];
    }, 2600);
  }

  ngOnDestroy(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }
}
