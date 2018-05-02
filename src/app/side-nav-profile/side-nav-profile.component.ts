import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-side-nav-profile',
  templateUrl: './side-nav-profile.component.html',
  styleUrls: ['./side-nav-profile.component.scss']
})
export class SideNavProfileComponent implements OnInit {

    userDetails: KeycloakProfile;

    constructor( private keycloakService: KeycloakService ) {
    }

    async ngOnInit() {
        this.userDetails = await this.keycloakService.loadUserProfile();
    }

}
