import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth :AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
  isLogged() {
    return this.auth.IsLoggedIn();
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
