import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home-page/home-page';
import { SearchBox } from './components/search-box/search-box';
import { CardList } from './components/card-list/card-list';
import { Card } from './components/card/card';
import { SharedModule } from '../shared/shared-module';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { AppRoutingModule } from '../app-routing-module';



@NgModule({
  declarations: [
    HomePage,
    SearchBox,
    CardList,
    Card,
    About,
    Contact
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HomePage
  ]
})
export class GifsModule { }
