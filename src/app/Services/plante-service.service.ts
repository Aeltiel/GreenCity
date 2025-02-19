import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Plante } from '../Models/plantes.model';

@Injectable({
  providedIn: 'root'
})
export class PlanteServiceService {
  baseUrlGreenSpace: string = 'http://localhost:3000/api/greenSpace';
  baseUrlPlante: string = 'http://localhost:3000/api/plantes';
  constructor(private http: HttpClient) { }

  getAllPlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.baseUrlPlante}`);
  }

  getOnePlante(greenSpaceId : string, planteId : string): Observable<Plante> {
    return this.http.get<Plante>(`${this.baseUrlGreenSpace}/${greenSpaceId}/plante/${planteId}`);
  }

  postPlante(greenSpaceId : string, plante: FormData): Observable<Plante> {
    return this.http.post<Plante>(`${this.baseUrlGreenSpace}/${greenSpaceId}/plante`, plante);
  }

  patchPlante(greenSpaceId : string, planteId : string ,plante:FormData): Observable<Plante> {
    return this.http.patch<Plante>(`${this.baseUrlGreenSpace}/${greenSpaceId}/plante/${planteId}`, plante);
  }

  deletePlante(greenSpaceId : string, planteId : string): Observable<Plante> {
    return this.http.delete<Plante>(`${this.baseUrlGreenSpace}/${greenSpaceId}/plante/${planteId}`);
  }
}
