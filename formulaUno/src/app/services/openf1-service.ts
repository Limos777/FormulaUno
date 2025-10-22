import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, firstValueFrom } from 'rxjs';
import { Meeting } from '../models/meeting';

@Injectable({
  providedIn: 'root'
})
export class Openf1Service {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.openf1.org/v1';

  async getMeetings(year : number): Promise<Meeting> {
    const meetings = this.http.get<Meeting[]>(this.baseUrl + "/meetings?year=" + year);
    return firstValueFrom(meetings);
}}
