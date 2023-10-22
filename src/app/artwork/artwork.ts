import { Artist } from '../artist/artist';
import { Type } from './type.enum'

export class Artwork {
  id: number;
  name: string;
  year: number;
  description: string;
  type: Type;
  short_description:string;
  artist: Artist;


  constructor (
    id: number,
    name: string,
    year: number,
    description: string,
    short_description: string,
    type: Type,
    artist: Artist
  ){
    this.id = id;
    this.name = name;
    this.year = year;
    this.description = description;
    this.short_description = short_description;
    this.type = type;
    this.artist = artist;
  }
}


