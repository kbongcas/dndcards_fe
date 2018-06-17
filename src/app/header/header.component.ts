import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userDetails: KeycloakProfile;

  constructor(private keycloakService: KeycloakService) {
  }

  async ngOnInit() {
    this.userDetails = await this.keycloakService.loadUserProfile();
  }

  async logout() {
    await this.keycloakService.logout();
  }

}
