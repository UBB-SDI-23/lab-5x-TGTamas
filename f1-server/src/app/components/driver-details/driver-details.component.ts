import { Component, OnInit } from '@angular/core';
import { DriverDetails } from 'src/app/models';
import { DriverService } from 'src/app/services/driver-service/driver.service';

@Component({
    selector: 'app-driver-details',
    templateUrl: './driver-details.component.html',
    styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit{

    public driver? : DriverDetails

    public constructor(private readonly driverService : DriverService) {}

    ngOnInit(): void {
        this.driverService.getById(1).subscribe(
            driver => this.driver = driver
        )
    }
}
