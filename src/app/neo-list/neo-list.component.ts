import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { NeoFeedService } from './../services/neo-feed.service';

@Component({
  selector: 'app-neo-list',
  templateUrl: './neo-list.component.html',
  styleUrls: ['./neo-list.component.scss']
})
export class NeoListComponent implements OnInit {
  public neoData: object[] = [];
  public displayedColumns: string[] = ['id', 'name', 'date'];

  constructor(public neoFeed: NeoFeedService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getNeoData();
  }

  getNeoData(): void {
    // receive the emitted event by the service and save the data in an array
    this.neoFeed.neo.subscribe(data => {
      for(let key in data.near_earth_objects) {
        this.neoData = this.neoData.concat(data.near_earth_objects[key]);
      }
    })
  }

  showNeoDetail(row): void {
    this.dialog.open(NeoDialog, {
      data: row
    });
    
  }

}

@Component({
  selector: 'neo-dialog',
  templateUrl: './neo-dialog.html',
  styleUrls: ['./neo-list.component.scss']
})
export class NeoDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
