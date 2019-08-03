import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListItem } from '../model/listItem';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private url = 'https://<xyz>.firebaseio.com/data.json';
  constructor(private http: HttpClient) {}

  addServers(servers: ListItem[]) {
    return this.http.put(this.url, servers).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getServers(): Observable<ListItem[]> {
    return this.http.get(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    ) as Observable<ListItem[]>;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
