import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Inventory} from '../inventory/inventory.service';


@Component({
  selector: 'app-login',
  providers: [AppService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData = {username: '', password: ''};

    constructor(private _service: AppService) {}

    login() {
        this._service.obtainAccessToken();
    }

  ngOnInit() {
  }

}
