import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app_digifood';
  constructor(public router: Router, public NgbDropdownModule: NgbDropdownModule) {

  }
}
