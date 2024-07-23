import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }, {
    id: uuid(),
    name: 'Trunks',
    power: 8000
  }];

  addCharacter( char: Character ): void {
    const newChar: Character = {
      ...char,
      id: uuid()
    }
    this.characters.push(newChar);
  }

  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter( char => char.id !== id);
  }

}
