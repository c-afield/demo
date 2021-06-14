import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' ,flag: true},
      { id: 12, name: 'Narco' ,flag: false},
      { id: 13, name: 'Bombasto' ,flag: true},
      { id: 14, name: 'Celeritas' ,flag: false},
      { id: 15, name: 'Magneta' ,flag: true},
      { id: 16, name: 'RubberMan' ,flag: false},
      { id: 17, name: 'Dynama' ,flag: true},
      { id: 18, name: 'Dr IQ' ,flag: false},
      { id: 19, name: 'Magma' ,flag: false},
      { id: 20, name: 'Tornado' ,flag: false}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}