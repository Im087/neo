import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeoFeedService {
  @Output()
  neo: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  getNeoFromNasa(range): void {
    const params = new HttpParams({
      fromObject: {
        start_date: range.start.toISOString().substring(0, 10),
        end_date: range.end.toISOString().substring(0, 10),
        api_key: 'DEMO_KEY'
      }
    });

    const url: string = 'https://api.nasa.gov/neo/rest/v1/feed';

    this.httpClient.get(url, {params}).subscribe({
      next: (data) => {
        console.log(data);
        // emit an event with the returned data, this will be received by another component
        this.neo.emit(data);
      },
      error: (err) => {
        console.log(err);
        alert('Please select a range of 7 days or less');
      }
    });
  }


}
