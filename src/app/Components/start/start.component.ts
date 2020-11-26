import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoordinationService } from 'src/app/Services/coordination.service';
import { DataSyncService } from 'src/app/Services/data-sync.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  geoCode:FormGroup;

  constructor(private fb:FormBuilder, private coorSer: CoordinationService, private router: Router, private dataSync: DataSyncService) {
    this.geoCode=fb.group({
      'address': [null, Validators.required]
    });
   }

  ngOnInit(): void {
  }
  
  show()
  {
    
    this.dataSync.address=this.geoCode.get('address').value;
    this.router.navigate(["/Result"]);
    
  }

}
