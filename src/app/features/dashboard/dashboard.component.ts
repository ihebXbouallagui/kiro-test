import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    const counters = document.querySelectorAll<HTMLElement>('.counter');
    const speed = 1200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')!;
        const count = +counter.innerText.replace(/[^0-9]/g, '');
        const increment = target / speed;

        if (count < target) {
          if (counter.innerText.includes('$')) {
            counter.innerText = '$' + Math.ceil(count + increment).toLocaleString();
          } else {
            counter.innerText = Math.ceil(count + increment).toLocaleString();
          }
          setTimeout(updateCount, 1);
        } else {
          if (counter.innerText.includes('$')) {
            counter.innerText = '$' + target.toLocaleString();
          } else {
            counter.innerText = target.toLocaleString();
          }
        }
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
          observer.disconnect();
        }
      }, { threshold: 0.5 });

      observer.observe(counter);
    });
  }
}
