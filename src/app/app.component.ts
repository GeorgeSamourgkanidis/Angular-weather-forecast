import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES_STRINGS } from './modules/app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigateByUrl(ROUTES_STRINGS.CURRENT);
  }
}
