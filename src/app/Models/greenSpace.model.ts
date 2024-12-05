export interface GreenSpace {
  _id: string;
  name: string;
  emplacement: [latitude: number, longitude: number];
  superficie: number;
  plantes: [string];
}
