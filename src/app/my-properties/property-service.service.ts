import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagContentType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Property } from '../model/property';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyServiceService {
  private API_URL = 'http://192.168.0.108:8080/api/v1/rentals/register';
  private access_token = "";

  constructor(private http: HttpClient) { }

  addproperty(propertydata:any) {
    const data = sessionStorage.getItem('data');
    if(data!==null){
    const sessionObject = JSON.parse(data);
    this.access_token = sessionObject.token;

    }
    // const headers = new HttpHeaders({
    //   'content-type':'application/json',
    //   'Authorization':'Bearer ${this.access_token}'
    // });
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Authorization',`Bearer ${this.access_token}`)

    this.http.post<any>(this.API_URL,propertydata,{ headers }).subscribe(
    response=>{
      console.log("api res:" +response)
    alert("successful registered")

    },
    error =>{

      console.log(this.access_token);
      console.log("error prop:"+error.message);

    }
    );
  }

  fetchProperties(){
    return this.http.get<{[key: string]: Property}>('https://nyumbapay-663d7-default-rtdb.firebaseio.com/property.json')
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
  this.access_token = sessionObject.token;

  }
  const headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('Authorization',`Bearer ${this.access_token}`)

    return this.http.get<Property[]>('http://192.168.0.108:8080/api/v1/properties/', { headers } );
  }


}
