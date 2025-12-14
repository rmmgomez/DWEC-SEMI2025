import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OlMap } from '../../ol-maps/ol-map';
import { OlMarker } from '../../ol-maps/ol-marker';
import { GaAutocomplete } from '../../ol-maps/ga-autocomplete';
import { SearchResult } from '../../ol-maps/search-result';

@Component({
  selector: 'mapa',
  imports: [OlMap, OlMarker, GaAutocomplete],
  templateUrl: './mapa.html',
  styleUrl: './mapa.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mapa {
  coordinates = signal<[number, number]>([-0.5, 38.5]);

  changePlace(result: SearchResult) {
    this.coordinates.set(result.coordinates);
    console.log(result.address); // Habría que guardarlo
  }
}
