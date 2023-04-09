import { Injectable } from '@angular/core';
import { RestService } from '../rest-service/rest.service';
import { Observable } from 'rxjs';
import { DriverDetails, DriverListItem } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private readonly resource : string = "drivers"

  constructor(private readonly restService : RestService) { }

  public getAll() : Observable<DriverListItem[]> {
      return this.restService.get(this.resource)
  }
  
  public getById(id : number) : Observable<DriverDetails> {
    return this.restService.getById(this.resource, id)
  }

  public orderByFoundation() : Observable<DriverListItem[]> {
    return this.restService.get(`${this.resource}/orderByFoundation`)
  }

  public delete(id : number) : Observable<never> {
    return this.restService.delete(this.resource, id);
  }

  public sortByFirstName() : Observable<DriverListItem[]> {
    return this.restService.sort(this.resource, "firstName")
  }
}
