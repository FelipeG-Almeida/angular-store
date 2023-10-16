import { Component } from '@angular/core';
import { mockGames } from 'src/assets/fakeData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  games = mockGames;
}
