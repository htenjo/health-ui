import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private userService:UserService ) { }

  ngOnInit() {
  }

  onLogin(){
    this.userService.findUserByUsername(this.username)
    .subscribe(
      (user : User) => {
        console.log(user);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}