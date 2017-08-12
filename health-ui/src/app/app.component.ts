import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService, public userService: UserService) {
    auth.handleAuthentication();
  }
}
