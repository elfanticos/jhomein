import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

Injectable()
export class HomeService {
    constructor(private http: ApiService) {
    }

    articleLast(): Observable<any> {
        return this.http.get({endpoint: 'apiJhomein', path: environment.apiService.path.last_article});
    }
}
