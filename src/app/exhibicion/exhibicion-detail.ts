import { Artwork } from "../artwork/artwork";
import { Sponsor } from "../sponsor/sponsor";
import { Exhibicion } from "./exhibicion";
export class ExhibicionDetail extends Exhibicion{
  artworks: Array<Artwork> = [];
  constructor(
    id: number,
    name: string,
    description: string,
    sponsor: Sponsor,
    artworks: Array<Artwork>
  ) {
    super(id, name, description,sponsor)
    this.artworks=artworks;
  }
}
