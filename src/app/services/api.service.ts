import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public apiUrl = env.SERVER_URL;
  constructor(private http: HttpClient) {}

  public get(uri: string): Observable<any> {
    return this.http.get(this.apiUrl + uri);
  }
}
