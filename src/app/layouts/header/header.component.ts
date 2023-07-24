import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private authService: AuthService) { }
  c_username: string= "Admin";
  imageprofile: string= "";
  firstname: string;
  secondname: string;


  ngOnInit(): void {
    this.fetchDataAndStoreInSessionStorage();

   if(this.authService.sessionData() !== null){
    const sessionObject = this.authService.sessionData();
    this.firstname = sessionObject.firstname;
    this.secondname = sessionObject.secondname;
   }

  }

  signOut(){
    sessionStorage.clear();
    this.router.navigate(['/'])
    alert("sign out successful")
  }

  fetchDataAndStoreInSessionStorage() {
    this.authService.tenantInfo().subscribe(
      (data) => {
        // Store the data in session storage
        sessionStorage.setItem('tenantData', JSON.stringify(data));
        console.log('Data stored in session storage:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
}
