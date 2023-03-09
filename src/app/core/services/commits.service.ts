import { Injectable } from '@angular/core';
import { Commit } from '../models/commit.model';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitsService {

  constructor(private api: ApiService) { }

  getCommits(repo: 'fe' | 'be'): Observable<Commit[]> {
    return this.api.get(`commits?repo=${ repo }`)
  }
}
