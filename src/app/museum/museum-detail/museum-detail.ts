import { Artwork } from '../../artwork/artwork';
import { Exhibicion } from '../../exhibicion/exhibicion';
import { Museum } from '../museum';

export class MuseumDetail extends Museum {
  artworks: Array<Artwork> = [];
  exhibitions: Array<Exhibicion> = [];

  constructor (
    id: number,
    name: string,
    description: string,
    address: number,
    city: string,
    image: string,
    artworks: Array<Artwork>,
    exhibitions: Array<Exhibicion>
  ){
    super(id, name, description, address, city, image)
    this.artworks = artworks;
    this.exhibitions = exhibitions;
  }
}
