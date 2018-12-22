import { Component, OnInit } from '@angular/core';
import {Inventory, InventoryService} from './inventory.service';
import {AppService} from './../app.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inventory',
  providers: [AppService],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventories: Inventory[];
    

    constructor(private inventoryService: InventoryService) {}


  ngOnInit() {


   this.inventoryService.getInventories().subscribe( data => {
    console.log(' inventories ' + data);
    this.inventories = data;
  });

  }

  // getResource(resourceUrl): Observable<Inventory> {

  //   const reqHeaders =  { 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  //                    'Authorization': 'Bearer ' + this.oauthService.getAccessToken()
  //                   };
  //   const httpOptions = {
  //       headers: new HttpHeaders(reqHeaders)
  //     };
  //   return this._http.get(resourceUrl, httpOptions)
  //     .map((res: Response) => res.json())
  //     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  // }
}
