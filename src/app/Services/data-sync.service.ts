import { Injectable } from '@angular/core';
import { GeoCode} from '../Models/geo-code-result';

@Injectable({
  providedIn: 'root'
})
export class DataSyncService {
  
  data: GeoCode;
  address;
  constructor() {
    
   }
  
}