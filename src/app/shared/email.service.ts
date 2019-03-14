import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Email} from './email.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private readonly API_URL_EMAIL = 'https://brainmusic-be.herokuapp.com/admin/email';

  constructor(private http: HttpClient) {
  }

  sendMail(feedback: Partial<Email>): Observable<Email> {
    return this.http.post<Email>(this.API_URL_EMAIL, feedback);
  }
}
