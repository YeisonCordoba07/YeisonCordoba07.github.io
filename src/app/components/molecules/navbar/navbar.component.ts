import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  savedTheme: string = localStorage.getItem('theme') || 'light';
  currentTheme: string = this.savedTheme;

  activeSection: string = 'inicio';


  constructor() { }

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.savedTheme);
    this.currentTheme = this.savedTheme;
  }

  changeTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    this.currentTheme = newTheme;
  }


  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId; // Update active section immediately
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = ['inicio', 'conocimientos', 'proyectos'];
    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is partially or fully visible
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          this.activeSection = sectionId;
          break;
        }
      }
    }
  }

}
