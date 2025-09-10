import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GifResponseInterface } from '../interfaces/gif-response-interface';
import { catchError, throwError } from 'rxjs';
import { GifInterface } from '../interfaces/git-interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);

  //private chuck_api = 'https://api.chucknorris.io/jokes/random';
  private rickAndMortyApi = 'https://rickandmortyapi.com/api/character/';

  private _searchHistory: string[] = [];
  private _gifsList: GifInterface[] = []

  constructor() {}

  get searchHistory() {
    return [...this._searchHistory];
  }

  get gifsList() {
    return [...this._gifsList];
  }

  newSearch(newTag: string) {
    const tag = newTag.toLowerCase();

    const indexOfTag = this._searchHistory.indexOf(tag);

    if (indexOfTag == 0)
      return;

    if (indexOfTag > 0)
      this._searchHistory.splice(indexOfTag, 1);

    this._searchHistory.unshift(tag);

    if (this._searchHistory.length > 10)
      this._searchHistory.pop();

    //const params = new HttpParams().set('category', tag);
    const params = new HttpParams().set('name', tag);

    this.http.get<GifResponseInterface>(this.rickAndMortyApi, { params })
             .subscribe((resp) => {
                this._gifsList = resp.results;
              });
  }
}
