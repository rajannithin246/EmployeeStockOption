import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate-service/authenticate.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  emailId: string = '';
  userName: string='';
  password: string = '';
  isAdmin: boolean = false;
  private userSubscription: Subscription | undefined;
  constructor(private authService: AuthenticateService,private router: Router){

  }

  registerUser() {
    const userData = {
      username: this.userName,
      email: this.emailId,
      password: this.password,
      isAdmin: this.isAdmin,
    };

    this.userSubscription =this.authService.insertUser(userData).subscribe(
      (response) => {
        this.router.navigate(['/admin-main']);
      },
      (error) => {
        console.error('Error inserting user data:', error);
      }
    );
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
     }


