import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GifResponseInterface } from '../interfaces/gif-response-interface';
import { catchError, of } from 'rxjs';
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

  constructor() {
    this.cargarAlmacenamientoLocal();

    if (this._searchHistory.length == 0)
      return;

    this.newSearch(this._searchHistory[0]);
  }

  get searchHistory() {
    return [...this._searchHistory];
  }

  get gifsList() {
    return [...this._gifsList];
  }

  newSearch(newTag: string) {
    const tag = newTag.toLowerCase();

    const indexOfTag = this._searchHistory.indexOf(tag);

    if (indexOfTag >= 0)
      this._searchHistory.splice(indexOfTag, 1);

    this._searchHistory.unshift(tag);

    if (this._searchHistory.length > 10)
      this._searchHistory.pop();

    //const params = new HttpParams().set('category', tag);
    const params = new HttpParams().set('name', tag);

    const sus = this.http.get<GifResponseInterface>(this.rickAndMortyApi, { params })
                         .pipe(catchError(error => of({'results': []})));

    sus.subscribe((resp) => { this._gifsList = resp.results; });

    this.guardarAlmacenamientoLocal();
  }

  guardarAlmacenamientoLocal(): void {
    localStorage.setItem('historial', JSON.stringify(this._searchHistory));
  }

  cargarAlmacenamientoLocal(): void {
    const historial = localStorage.getItem('historial');

    if (!historial)
      return;

    this._searchHistory = JSON.parse(historial!);
  }
}
