import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouseloneComponent } from './carouselone/carouselone.component';
import { CarouseltwoComponent } from './carouseltwo/carouseltwo.component';
import { ChefComponent } from './chef/chef.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,  CarouseloneComponent, CarouseltwoComponent, ChefComponent,  FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
