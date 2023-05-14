import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class RestService {

  constructor(private readonly http : HttpClient) { }

  ip : string = "http://localhost"

  public get<T>(getAllWhat : string) : Observable<T[]> {
    return this.http.get(`${this.ip}/${getAllWhat}`) as Observable<T[]>
  }

  public getById<T> (getWhat : string, id : number) : Observable<T> {
    return this.http.get(`${this.ip}/${getWhat}/${id}`) as Observable<T>
  }

  public delete<T>(deleteWhat : string, id : number) : Observable<T> {
    return this.http.delete(`${this.ip}/${deleteWhat}/${id}`) as Observable<T>
  }

  public sort<T>(sortWhat : string, byWhat : string) : Observable<T[]>{
    return this.http.get(`${this.ip}/${sortWhat}`, {observe : 'response'}).pipe(
      map((response: HttpResponse<any>) => {
        const items = response.body
        if (!items){return [] }
        items.sort((a : any,b : any) => {
          if (a[byWhat] < b[byWhat]) return -1
          if (a[byWhat] > b[byWhat]) return 1
          return 0
        }) 
        return items
      })
    ) as Observable<T[]>
  }
}
