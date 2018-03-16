import { Injectable } from '@angular/core';

@Injectable()
export class InventoryService {

  constructor() { }

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
