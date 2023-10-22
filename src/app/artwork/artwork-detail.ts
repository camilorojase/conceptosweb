import { Artist } from "../artist/artist";
import { Artwork } from "./artwork";
import { Type } from './type.enum'


export class ArtworkDetail extends Artwork{
   constructor(
    id: number,
    name: string,
    year: number,
    description: string,
    short_description: string,
    type: Type,
    artist: Artist
   )
    {
      super(id,name,year,description,short_description,type, artist)
    }
}
