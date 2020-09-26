import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/registration']);
  }

  signin() {
    this.router.navigate(['/sign-in']);
  }

  ngOnInit(): void {}
}
