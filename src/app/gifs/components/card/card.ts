import { Component, Input, OnInit } from '@angular/core';
import { GifInterface } from '../../interfaces/git-interface';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card implements OnInit {

  @Input()
  public gif!: GifInterface;

  ngOnInit(): void {
    if (!this.gif) throw new Error('Se requiere un gif');
  }
}
