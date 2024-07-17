import { Component } from '@angular/core';
import { Card } from './card';
import { CARD } from './mock';
@Component({
  selector: 'app-carouseltwo',
  standalone: true,
  imports: [],
  templateUrl: './carouseltwo.component.html',
  styleUrl: './carouseltwo.component.css'
})
export class CarouseltwoComponent {
  title: Card[] = CARD;
  
  ngOnInit(){
    console.table(this.title);
  }
}
