import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../shared-service/shared.service';
import {  RegisterServiceService} from './register-service/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailId: string = '';
  userName: string='';
  password: string = '';
  isAdmin: boolean = false;
  private userSubscription: Subscription | undefined;
  constructor(private regService: RegisterServiceService,private router: Router,private dataSharingService: SharedService){

  }

  registerUser() {
    const userData = {
      username: this.userName,
      email: this.emailId,
      password: this.password,
      isAdmin: this.isAdmin,
    };

    this.userSubscription =this.regService.registerUser(userData).subscribe(
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
