import { Component, ElementRef, input, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.html',
  styleUrl: './search-box.css'
})
export class SearchBox {

  @ViewChild('searchBoxInput')
  public searchBoxInput!: ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService) {}

  public searchAccion(): void {
    const inputValue = this.searchBoxInput.nativeElement.value;

    if (!inputValue)
      return;

    this.gifsService.newSearch(inputValue);

    this.searchBoxInput.nativeElement.value = '';
  }
}
