import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  gameCover: String = '';
  @Input()
  gameLabel: String = '';
  @Input()
  gameType: String = 'Digital PS4';
  @Input()
  gamePrice: String = 'R$ 399,90';
}
