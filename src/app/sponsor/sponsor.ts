export class Sponsor {
  id: number;
  name: string;
  description: string;
  website: string;

  public constructor(id: number, name: string, description: string,website: string) {
    this.id=id;
    this.website=website;
    this.name = name;
    this.description = description;
  }
}
