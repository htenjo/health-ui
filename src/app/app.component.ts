import { Component } from '@angular/core';
import { HeaderComponent } from './shared_components/header/header.component';
import { FooterComponent } from './shared_components/footer/footer.component';
import { AuthService } from './shared_services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService:AuthService) {}
}
