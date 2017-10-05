import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared_services/auth/auth.service';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent {

  constructor(public auth: AuthService) {
    this.auth.handleAuthentication();
  }
}
