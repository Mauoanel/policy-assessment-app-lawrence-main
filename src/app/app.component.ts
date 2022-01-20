import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {SessionTokenHolderService} from './services/session-token-holder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'policy-assessment-app';

  constructor(public router: Router, public sessionTokenHolderService: SessionTokenHolderService) {

  }

  logout() {
    this.sessionTokenHolderService.clear();
    this.router.navigate(['/']);
  }
}
