import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-home',
  providers: [AppService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   public isLoggedIn = false;

    constructor(private _service: AppService) {}

    ngOnInit() {
        this.isLoggedIn = this._service.isLoggedIn();
    }

    login() {
        this._service.obtainAccessToken();
    }

    logout() {
        this._service.logout();
    }

}
