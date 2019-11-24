import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { environment } from 'src/environments/environment';
// ----------------
export interface IResponse {
  body: {};
  //
  statusCode: number;
  statusMessage: string;
}
// ----------------
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) {}
  // ----------------
  get<T>(obj: { endpoint?: string; path?: string; _params?: HttpParams }): Observable<Response> {
    const endpoint = environment[obj.endpoint] + obj.path;
    const _GET$ = this.http.get<Response>(endpoint, {
      params: obj._params
    });
    return _GET$;
  }

  post<T>(endpoint: string, path: string, body?: any): Observable<Response> {
    endpoint = environment[endpoint] + path;
    const _POST$ = this.http.post<Response>(endpoint, body);
    return _POST$;
  }

  put<T>(endpoint: string, path: string, body?: any): Observable<Response> {
    endpoint = environment[endpoint] + path;
    const _POST$ = this.http.put<Response>(endpoint, body);
    return _POST$;
  }

  delete<T>(endpoint: string, path: string, params?: HttpParams): Observable<Response> {
    endpoint = environment[endpoint] + path;
    const _DELETE$ = this.http.delete<Response>(endpoint, { params });
    return _DELETE$;
  }
}

