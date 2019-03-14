import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Music} from './music.model';

@Injectable({
  providedIn: 'root'
})
export class MusiclistService {

  formData: Music;
  list: Music[];
  private API_URL_SONG = 'https://brainmusic-be.herokuapp.com/admin/songs/';

  constructor(private http: HttpClient) {
  }

  postSong(formData: Music) {
    return this.http.post(this.API_URL_SONG, formData);
  }

  refreshList() {
    this.http.get(this.API_URL_SONG).toPromise().then(res => this.list = res as Music[]);
  }


  putSong(formData: Music) {
    return this.http.put(this.API_URL_SONG + formData.id, formData);
  }

  deleteSong(id: number) {
    return this.http.delete(this.API_URL_SONG + id);
  }
}
