import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class IssModule {

  private currentPriceUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
  data;
  constructor(private http: Http) { }
  
  getData():Promise{
    return this.http.get(this.currentPriceUrl).toPromise()
      .then(response => response.json());
  }


}
