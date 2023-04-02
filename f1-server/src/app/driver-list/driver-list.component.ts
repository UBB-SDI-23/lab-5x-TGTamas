import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest-service/rest.service';

@Component({
    selector: 'app-driver-list',
    templateUrl: './driver-list.component.html',
    styleUrls: ['./driver-list.component.scss']
})
export class DriverListComponent implements OnInit {
    public strings: string[] = [];
    public elem = 'b';
    
    public constructor(private readonly restService : RestService) {}

    ngOnInit(): void {
        console.log('Hello world!');
        this.strings.push('a');
        this.strings = [...this.strings, 'b', 'c'];

        this.restService.getDrivers().subscribe(
            (drivers : any) => console.log(drivers)
        )
    }

}
