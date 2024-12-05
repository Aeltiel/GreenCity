export interface GreenSpace {
  id: string;
  nom: string;
  emplacement: [latitude: number, longitude: number];
  superficie: number;
  plantes: [string];
  responsable: string;
}
