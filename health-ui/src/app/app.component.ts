import { Component } from '@angular/core';
import { AuthService } from './shared_services/auth/auth.service';
import { HeaderComponent } from './shared_components/header/header.component';
import { FooterComponent } from './shared_components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
