import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InventoryService {

  constructor(private _http: HttpClient) { }

  getInventories(): Observable<Inventory[]> {

    return Observable.of([ new Inventory(1, 'TV', 'CHENNAI'), 
            new Inventory(1, 'TV', 'BANGALORE') 
          ]);
  }


}


export class Inventory {

   public inventoryId: number;
   public locationName: string;
   public productName: string;

   constructor(id: number, pName: string, lName: string) {
      this.inventoryId = id;
     this.locationName = lName;
     this.productName = pName;

   }
}
