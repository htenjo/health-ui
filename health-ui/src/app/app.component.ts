import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';

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
