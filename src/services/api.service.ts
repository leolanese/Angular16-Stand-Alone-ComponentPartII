import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Data } from '../interfaces/data';

@Injectable()
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private data = new BehaviorSubject<Data[] | undefined>(undefined);

  data$: Observable<Data[]> = this.data.asObservable();

  constructor(private http: HttpClient) {}

  getAlbums(): void {
    this.http.get<Data[]>(this.apiUrl).subscribe((response) => {
      this.data.next(response);
      console.log(response);
    });
  }

  // Angular 14 HttpClient Error Handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
