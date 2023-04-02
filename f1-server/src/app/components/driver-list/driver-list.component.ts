import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest-service/rest.service';
import { DriverService } from '../../services/driver-service/driver.service';
import { DriverListItem } from '../../models';

@Component({
    selector: 'app-driver-list',
    templateUrl: './driver-list.component.html',
    styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
    public drivers: DriverListItem[] = []
    
    public constructor(private readonly driverService : DriverService) {}

    ngOnInit(): void {
        this.driverService.getAll().subscribe(
            drivers => this.drivers = drivers
        )
    }

    public getDetails(id : number) : void {
        this.driverService.getById(id).subscribe(
            driver => console.log(driver)
        )
    }

}
