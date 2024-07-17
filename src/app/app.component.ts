import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouseloneComponent } from './carouselone/carouselone.component';
import { CarouseltwoComponent } from './carouseltwo/carouseltwo.component';
import { ChefComponent } from './chef/chef.component';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,  CarouseloneComponent, CarouseltwoComponent, ChefComponent,  FooterComponent, CategoriesComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
