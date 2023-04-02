import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverListItem } from '../../models';

@Injectable({
  providedIn: 'root'

})
export class RestService {

  constructor(private readonly http : HttpClient) { }

  public get<T>(getAllWhat : string) : Observable<T[]> {
    return this.http.get(`http://localhost:8080/${getAllWhat}`) as Observable<T[]>
  }

  public getById<T> (getWhat : string, id : number) : Observable<T> {
    return this.http.get(`http://localhost:8080/${getWhat}/${id}`) as Observable<T>
  }
}
