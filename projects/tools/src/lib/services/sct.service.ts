import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SctService {
	constructor(private http: HttpClient) {}
	baseUrl = 'http://localhost:3000/';

	get(url: string): Observable<any> {
		return this.http.get(this.baseUrl.concat(url));
	}
}
