import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(user:any): Observable<string>{
    return this.http.post<string>(this.api + 'users/register/', user);
  }

  /*
  login(user:any): Observable<any>{
    return this.http.post<string>(this.api + 'users', user);
  }*/
}
