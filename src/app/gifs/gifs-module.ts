import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home-page/home-page';
import { SearchBox } from './components/search-box/search-box';
import { CardList } from './components/card-list/card-list';



@NgModule({
  declarations: [
    HomePage,
    SearchBox,
    CardList
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePage
  ]
})
export class GifsModule { }
