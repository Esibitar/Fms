import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Api } from 'src/app/model/testingIntellijApi';

@Component({
  selector: 'app-intellij-test',
  templateUrl: './intellij-test.component.html',
  styleUrls: ['./intellij-test.component.css']
})
export class IntellijTestComponent {
  details: Api[] = [];

  api = "http://192.168.150.44:8080/api/v2/student";

  constructor(private http: HttpClient){

  }

  receiveInfo(){
    return this.http.get(this.api);
  }

}
