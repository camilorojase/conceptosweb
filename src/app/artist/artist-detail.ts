import { Artwork } from "../artwork/artwork";
import { Movement } from "../movement/movement";
import { Artist } from "./artist";

export class ArtistDetail extends Artist {

  artworks: Artwork[];
  movements: Movement[];

  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthdate: Date,
    image: string,
    artworks: Artwork[],
    movements: Movement[]
  ){
    super(id, name, birthplace, birthdate, image);
    this.artworks = artworks;
    this.movements = movements;
  }

}
