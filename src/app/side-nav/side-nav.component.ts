import { Component, OnInit } from '@angular/core';

import {
    Router,
    RouterEvent,
    NavigationStart
} from '@angular/router';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})

export class SideNavComponent implements OnInit {

    private router: Router;
    private currentRoute: String;

    constructor(router: Router) {
        this.router = router;
    }

    /*
    goToRoute(url: String): void {
        this.router.navigate([url]);
        this.router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((event: RouterEvent) => this.setCurrentRoute(event.url));
    }

    setCurrentRoute(url: String): void {
       if (url.indexOf('home') > -1) {
           this.currentRoute = 'home';
       } else if (url.indexOf('cards') > -1) {
           this.currentRoute = 'cards';
       } else {
           this.currentRoute = 'home';
       }
    }
    */

    ngOnInit() {
    }
}
