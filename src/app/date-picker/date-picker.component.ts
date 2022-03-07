import { NeoFeedService } from './../services/neo-feed.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  public range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(public neoFeed: NeoFeedService) { }

  ngOnInit(): void {
    
  }

  setRange(): void {
    this.neoFeed.getNeoFromNasa(this.range.value);
  }


}
