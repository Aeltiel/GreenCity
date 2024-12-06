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
  getOneGreenSpace(id: string): Observable<GreenSpace> {
    return this.http.get<GreenSpace>(`${this.baseUrl}/${id}`);
  }
  postGreenSpace(space: GreenSpace): Observable<GreenSpace> {
    return this.http.post<GreenSpace>(`${this.baseUrl}`, space);
  }

  patchGreenSpace(space: GreenSpace, id: string): Observable<GreenSpace> {
    return this.http.patch<GreenSpace>(`${this.baseUrl}/${id}`, space);
  }

  deleteGreenSpace(id: string): Observable<GreenSpace> {
    return this.http.delete<GreenSpace>(`${this.baseUrl}/${id}`);
  }
}
