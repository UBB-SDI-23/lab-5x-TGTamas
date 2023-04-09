import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest-service/rest.service';
import { DriverService } from '../../services/driver-service/driver.service';
import { DriverListItem } from '../../models';

@Component({
    selector: 'app-driver-list',
    templateUrl: './driver-list.component.html',
    styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent {
    public drivers: DriverListItem[] = []
    
    public constructor(private readonly driverService : DriverService) {}

    public getAll() {
        this.driverService.getAll().subscribe(
            drivers => this.drivers = drivers
        )
    }

    public orderByFoundation() {
        this.driverService.orderByFoundation().subscribe(
            drivers => this.drivers = drivers
        )
    }

    public deleteByIndex(index : number) {
        this.driverService.delete(this.drivers[index].id).subscribe(()=>this.drivers.splice(index, 1))
    }

    public sortByFirstName() {
        this.driverService.sortByFirstName().subscribe(
            drivers => this.drivers = drivers
        )
    }
}
