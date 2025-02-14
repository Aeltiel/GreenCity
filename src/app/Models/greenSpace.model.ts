export interface GreenSpace {
  _id: string;
  nom: string;
  latitude: number;
  longitude: number;
  superficie: number;
  plantes: [string];
  responsable: string;
  imageSpaceUrl: string 
}
