export class Artist {
  id: number;
  name: string;
  birthplace: string;
  birthdate: Date;
  image: string;

  constructor(
    id: number,
    name: string,
    birthplace: string,
    birthdate: Date,
    image: string
  ){
    this.id = id;
    this.name = name;
    this.birthplace = birthplace;
    this.birthdate = birthdate;
    this.image = image;
  }
}
