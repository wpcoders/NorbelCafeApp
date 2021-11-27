import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; @Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiUrl: any;
  httpOptions: any;
  token: any;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }



  getlogout(token) {
    return this.httpClient.get(`${this.apiUrl}Authentication/logout?token=${token}`);
  }
  doScanQRCode(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Cafe/scanQRCode`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doGetBookingDetails(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Cafe/getbookingdetails`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doCancleBooking(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}User/cancleBooking`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  doScanQRCodeFreeCoffee(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Cafe/scanQRCodeFreeCoffee`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }

  doGetnextHourBooking(data): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}Cafe/getnextHourBooking`, data).pipe(
      map(response => {
        return response;
      }),
    );
  }
  
}
