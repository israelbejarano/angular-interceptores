import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Israel Bejarano');

    return this.http.get('https://reqres.in/api/user', {
      params
    }).pipe(
      map(resp => resp['data']),
    );
  }
}
