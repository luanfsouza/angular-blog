import { BigCardComponent } from '../../components/big-card/big-card.component';
import { Component } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { MovieCardComponent } from "../../components/movie-card/movie-card.component";
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuBarComponent,
    MovieCardComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  
}
