import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getAllStocks(): Observable<any> {
    const _url = `https://groww.in/v1/api/stocks_data/v1/all_stocks`
    // const _url = `/api/v1/api/stocks_data/v1/all_stocks`
    const payload = {
      "listFilters": {
          "INDUSTRY": [],
          "INDEX": []
      },
      "objFilters": {
          "CLOSE_PRICE": {
              "max": 100000,
              "min": 0
          },
          "MARKET_CAP": {
              "min": 0,
              "max": 2000000000000000
          }
      },
      "page": "1",
      "size": "100",
      "sortBy": "NA",
      "sortType": "ASC"
  }
    return this.http
      .post(_url, payload)
      .pipe(catchError((error: HttpErrorResponse) => throwError(() => error)));

  }

  // getTrackListFromApi(payload: any): Observable<any> {
  //   return this.httpClient
  //     .post(
  //       `${environment.appConfig.api.yardCentralApi}/inventory/track-summary/search`,
  //       payload
  //     )
  //     .pipe(catchError((error) => of(error)));
  // }
}
