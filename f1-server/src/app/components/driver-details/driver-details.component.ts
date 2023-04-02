import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverDetails } from 'src/app/models';
import { DriverService } from 'src/app/services/driver-service/driver.service';

@Component({
    selector: 'app-driver-details',
    templateUrl: './driver-details.component.html',
    styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit{

    public driver? : DriverDetails

    public constructor(private readonly driverService : DriverService, private readonly route : ActivatedRoute) {}

    ngOnInit(): void {
        const id = Number.parseInt(this.route.snapshot.paramMap.get('id')!);
        this.driverService.getById(id).subscribe(
            driver => this.driver = driver
        )
    }
}
