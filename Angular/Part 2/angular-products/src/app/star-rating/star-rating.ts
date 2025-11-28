import { ChangeDetectionStrategy, Component, effect, model, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'star-rating',
  imports: [NgClass],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarRating {
  rating = model.required<number>();
  auxRating = signal(1);

  constructor() {
    // La primera vez y cada vez que cambie el valor de rating se actualiza auxRating
    effect(() => this.auxRating.set(this.rating()), {
      allowSignalWrites: true, // Permitir escribir en señales con effect (en Angular v19 no hace falta)
    });
  }
}
