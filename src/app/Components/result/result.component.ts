import { Route } from '@angular/compiler/src/core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeoCode } from 'src/app/Models/geo-code-result';
import { CoordinationService } from 'src/app/Services/coordination.service';
import { DataSyncService } from 'src/app/Services/data-sync.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  coor;
  address: string;
  popular;
  count;
  streetname;
  streetnumber;
  city;
  ListPopular;
  constructor(private route: Router, private dataSync: DataSyncService, private coorSer: CoordinationService, public dialogRef: MatDialogRef<ResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
  ngOnInit() {
    this.coorSer.getCoordination(this.dataSync.address).subscribe(data => {
      this.coor = data;
      this.dataSync.data = data;
      console.log(data);
      this.coorSer.addToDB(this.coor[0]);

      this.coorSer.getMostPopular().subscribe(x => {
        this.popular = x;
        console.log(this.popular);
        this.streetname=this.popular.streetname;
        this.count=this.popular.count;
        this.streetnumber=this.popular.streetnumber;
        this.city=this.popular.city;
      });

      this.coorSer.getListPopular().subscribe(x=>{
        this.ListPopular=x;
      });
      
    });
    this.address = this.dataSync.address;
  }
}
