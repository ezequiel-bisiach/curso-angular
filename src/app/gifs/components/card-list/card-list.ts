import { Component, Input } from '@angular/core';
import { GifInterface } from '../../interfaces/git-interface';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.html',
  styleUrl: './card-list.css'
})
export class CardList {

  @Input()
  public gifs: GifInterface[] = [];

}
