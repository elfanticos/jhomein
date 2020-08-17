import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(
        public _httpClient: HttpClient,
    ) { }

    getDataTecniques():Observable<any> {
        return this._httpClient.get("./assets/data/techniques.json");
    }

    getDataPersonal(): Observable<any> {
        return this._httpClient.get('../assets/data/personal.json');
    }
    
}