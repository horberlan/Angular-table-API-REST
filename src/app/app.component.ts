import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './Users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'JSONServerAPI';

  constructor(private rs : RestService){}

  columns = ["User Id", "Names","Mail", "Edit"];

  index = ["id", "Names","Mail","Edit"];

  users : Users[] = [];

  ngOnInit(): void {
    this.rs.getUsers().subscribe
    (
      (response)=>
      {
        this.users = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }


}
