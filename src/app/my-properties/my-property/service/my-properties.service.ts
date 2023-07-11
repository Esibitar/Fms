import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Property } from 'src/app/model/property';

@Injectable({
  providedIn: 'root'
})
export class MyPropertiesService {

  constructor(private http: HttpClient) { }

  onPropertyCreated(property: {propertyName: string, propertyLocation: string, propertyUnits: number}){
    console.log(property);
const headers = new HttpHeaders({'myHeader': 'property'});
this.http.post<{name: string}>('https://nyumbapay-663d7-default-rtdb.firebaseio.com/property.json', property)
.subscribe((res) => {
console.log(res);

})
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

onDeleteProperties(id: string){
  this.http.delete('https://nyumbapay-663d7-default-rtdb.firebaseio.com/property/' +id+ '.json')
  .subscribe();
   }

}
