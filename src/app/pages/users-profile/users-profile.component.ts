import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  profileImage: string = '';
  profileData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.sessionData() !== null){
        this.profileData = this.authService.sessionData();
        this.firstname = this.profileData.user.firstName;
        this.lastname = this.profileData.user.lastName;
        this.gender = this.profileData.gender;
        this.profileImage = this.profileData.image;
    }
  }

}
