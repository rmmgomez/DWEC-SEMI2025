import { ChangeDetectionStrategy, Component, linkedSignal, model } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'star-rating',
  imports: [FontAwesomeModule],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRating {
  rating = model.required<number>();
  auxRating = linkedSignal(() => this.rating());
  starEmpty = faStarEmpty;
  starFull = faStarFull;
}
