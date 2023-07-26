import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Property } from '../model/property';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  private API_URL = 'https://6be7-154-159-252-222.ngrok-free.app/properties/getProperties/landlord17@gmail';
  private token = "";

  constructor(private http: HttpClient) { }

  addproperty(propertydata:any) {
    const data = sessionStorage.getItem('data');
    if(data!==null){
    const sessionObject = JSON.parse(data);
    this.token = sessionObject.access_token;

    }
    // const headers = new HttpHeaders({
    //   'content-type':'application/json',
    //   'Authorization':'Bearer ${this.access_token}'
    // });
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization',`Bearer ${this.token}`)

    this.http.post<any>(this.API_URL,propertydata,{ headers }).subscribe(
    response=>{
      console.log("api res:" +response)
    alert("successful registered")

    },
    error =>{

      console.log(this.token);
      console.log("error prop:"+error.message);

    }
    );
  }

  fetchProperties(){
    
    return this.http.get<{[key: string]: Property}>(this.API_URL)
      .pipe(map((res) =>{
        const properties = [];
        for(const key in res){
          if(res.hasOwnProperty(key)){
            properties.push({...res[key], id: key})
          }
        }
        return properties;
      }));
  }



  getProperties(): Observable<Property[]>{
    const data = sessionStorage.getItem('data');
  if(data!==null){
  const sessionObject = JSON.parse(data);
  this.token = sessionObject.access_token;
  this.token = sessionObject.user.username;

  }
  const headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('Authorization',`Bearer ${this.token}`)

    return this.http.get<Property[]>(this.API_URL, { headers } );
  }


}
