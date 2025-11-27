import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MessageDto } from '../interfaces/dtos';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private httpClient = inject(HttpClient);

  resourceUrl = environment.resource_url;

  public user(): Observable<MessageDto> {
    return this.httpClient.get<MessageDto>(this.resourceUrl + 'user');
  }

  public admin(): Observable<MessageDto> {
    return this.httpClient.get<MessageDto>(this.resourceUrl + 'admin');
  }
}
