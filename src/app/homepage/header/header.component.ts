import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../shared/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private token: TokenStorageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}


