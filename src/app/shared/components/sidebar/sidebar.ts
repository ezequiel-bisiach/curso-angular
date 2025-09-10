import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  constructor (private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.searchHistory;
  }

  newSearch(tag: string): void {
    this.gifsService.newSearch(tag)
  }
}
