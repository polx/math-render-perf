import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        const needsJs = url.includes("mathJaxJs");
        const wasJsEnabled = sessionStorage.getItem("mathJaxJsEnabled") === "true";

        if (needsJs && !wasJsEnabled) {
          sessionStorage.setItem("mathJaxJsEnabled", "true");
          location.reload();
        } else if (!needsJs && wasJsEnabled) {
          sessionStorage.removeItem("mathJaxJsEnabled");
          location.reload();
        }
      }
    });
  }

  title = 'math-render-perf';
}
