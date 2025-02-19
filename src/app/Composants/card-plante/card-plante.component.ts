import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Plante } from '../../Models/plantes.model';

@Component({
  selector: 'app-card-plante',
  imports: [RouterLink],
  templateUrl: './card-plante.component.html',
  styleUrl: './card-plante.component.scss'
})
export class CardPlanteComponent {
  plante = input<Plante>({} as Plante);
}
