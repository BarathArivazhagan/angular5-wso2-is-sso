import { Component, OnInit } from '@angular/core';
import {Inventory} from './inventory.service';
import {AppService} from './../app.service';


@Component({
  selector: 'app-inventory',
  providers: [AppService],
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventory = new Inventory(1, 'tv', 'chennai');
    private foosUrl = 'http://localhost:8082/spring-security-oauth-resource/foos/';

    constructor(private _service: AppService) {}

    getFoo() {
        this._service.getResource(this.foosUrl + this.inventory.inventoryId)
          .subscribe(
            data => this.inventory = data,
            error =>  console.log('error in get resource'));
    }

  ngOnInit() {
  }

}
