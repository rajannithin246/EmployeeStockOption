import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate-service/authenticate.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service/shared.service';

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
  constructor(private authService: AuthenticateService,private router: Router,private dataSharingService: SharedService){

  }

  registerUser() {
    const userData = {
      // username: this.userName,
      email: this.emailId,
      password: this.password,
      // isAdmin: this.isAdmin,
    };

    this.userSubscription =this.authService.authenticateUser(userData).subscribe(
      (response) => {
        this.dataSharingService.setUserData(response);
        if(response && response.data.role === 'admin'){
        this.router.navigate(['/dashboard/approved-nomination']);
        } else{
          this.router.navigate(['/dashboard/stock-options']);
        }
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


