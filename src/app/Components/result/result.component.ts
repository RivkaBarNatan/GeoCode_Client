import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoordinationService } from 'src/app/Services/coordination.service';
import { DataSyncService } from 'src/app/Services/data-sync.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  coor;
  latitude;
  longitude;
  address: string;
  constructor(private route: Router, private dataSync: DataSyncService, private coorSer: CoordinationService) { }

  ngOnInit() {
    this.coorSer.getCoordination(this.dataSync.address).subscribe(data => {
      this.coor = data;
      this.dataSync.data = data;
      console.log(data);
      this.coorSer.addToDB(this.coor[0]);

    });
    this.address = this.dataSync.address;
  }


  end() {
    this.route.navigate(['']);
  }
}
