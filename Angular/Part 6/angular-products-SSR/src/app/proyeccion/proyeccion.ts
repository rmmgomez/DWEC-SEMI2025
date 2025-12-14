import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'proyeccion',
  imports: [],
  templateUrl: './proyeccion.html',
  styleUrl: './proyeccion.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyeccion {
  bgClass = input('bg-transparent');
  textClass = input('text-dark');
}
