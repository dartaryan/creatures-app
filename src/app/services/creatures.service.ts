import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreaturesService {
  constructor(private http: HttpClient) {}

  getCreatures(): Observable<any> {
    return this.http.get('data/creature.json');
  }
}
