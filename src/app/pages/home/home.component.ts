import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // * SHOW MENU AND HIDDEN

    const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

    // SHOW

    toggleMenu?.addEventListener('click', () => {
      navMenu?.classList.toggle('show');
    });

    // HIDDEN
    closeMenu?.addEventListener('click', () => {
      navMenu?.classList.remove('show');
    });

    // REMOVE MENU

    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      navMenu?.classList.remove('show');
    }

    navLink.forEach((n) => n.addEventListener('click', linkAction));

    // Scroll section active link
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', scrollActive);

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {

        if(current instanceof HTMLElement) {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 50;

          const sectionId = current.getAttribute('id');
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.add('active');
          } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']')?.classList.remove('active');
          }
        }
      });
    }
  }

}
