import { Injectable } from '@angular/core';
import { GreenSpace } from '../Models/greenSpace.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GreenSpaceSService {
  baseUrl: string = 'http://localhost:3000/space';
  constructor(private http: HttpClient) {}

  getGreenSpaces(): Observable<GreenSpace[]> {
    return this.http.get<GreenSpace[]>(`${this.baseUrl}`);
  }
  getOneGreenSpace(): Observable<GreenSpace> {
    return this.http.get<GreenSpace>(`${this.baseUrl}0`);
  }
}
