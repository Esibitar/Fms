import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  username: string = '';
  lastname: string = '';
  gender: string = '';
  profilePic: string = '';
  profileData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.sessionData() !== null){
        this.profileData = this.authService.sessionData();
        this.username = this.profileData.user.username;
        this.lastname = this.profileData.user.lastName;
        this.gender = this.profileData.gender;
        this.profilePic = this.profileData.user.profilePic;
    }
  }

}
